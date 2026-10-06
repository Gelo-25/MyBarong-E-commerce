import { useState } from 'react'
import '../App.css'
import './profile.css'
import Footer from '../Footer/Footer'
import { useShop } from '../context/useShop'

const TABS = [
  { key: 'personal', label: 'Personal Info' },
  { key: 'security', label: 'Security' },
  { key: 'orders', label: 'Order History' },
]

function Profile() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const pendingTab = sessionStorage.getItem('mybarong:profile-tab')
      if (pendingTab) {
        sessionStorage.removeItem('mybarong:profile-tab')
        return pendingTab
      }
    }
    return 'personal'
  })
  const { profile, updateProfile, orders, addReview, getReviewsForProduct } = useShop()

  const [personalForm, setPersonalForm] = useState({
    firstName: profile.firstName || '',
    lastName: profile.lastName || '',
    address: profile.address || '',
    email: profile.email || '',
    contact: profile.contact || '',
  })

  const [securityForm, setSecurityForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const [reviewingOrder, setReviewingOrder] = useState(null)
  const [reviewText, setReviewText] = useState('')
  const [reviewRating, setReviewRating] = useState(5)

  const handlePersonalChange = (field, value) => {
    setPersonalForm((prev) => {
      const next = { ...prev, [field]: value }
      updateProfile(next)
      return next
    })
  }

  const handleSecurityChange = (field, value) => {
    setSecurityForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSavePersonal = () => {
    updateProfile(personalForm)
    alert('Personal information saved.')
  }

  const handleChangePassword = () => {
    if (!securityForm.currentPassword || !securityForm.newPassword || !securityForm.confirmPassword) {
      alert('Please fill in all password fields.')
      return
    }
    if (securityForm.currentPassword !== profile.password) {
      alert('Current password is incorrect.')
      return
    }
    if (securityForm.newPassword !== securityForm.confirmPassword) {
      alert('New passwords do not match.')
      return
    }
    updateProfile({ password: securityForm.newPassword })
    setSecurityForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
    alert('Password updated successfully.')
  }

  const handleWriteReview = (orderId, itemSlug, itemSize) => {
    setReviewingOrder({ orderId, slug: itemSlug, size: itemSize })
    setReviewText('')
    setReviewRating(5)
  }

  const handleSubmitReview = () => {
    if (!reviewingOrder || !reviewText.trim()) return
    addReview(
      reviewingOrder.orderId,
      reviewingOrder.slug,
      reviewingOrder.size,
      reviewRating,
      reviewText.trim()
    )
    setReviewingOrder(null)
    setReviewText('')
    setReviewRating(5)
  }

  return (
    <main className="profile-page">
      <section className="profile-hero">
        <span className="profile-breadcrumb">HOME / PROFILE</span>
        <h1>My account</h1>
      </section>

      <div className="profile-layout">
        <aside className="profile-sidebar">
          <div className="profile-avatar">
            <span>MB</span>
          </div>
          <h2>{profile.firstName ? `${profile.firstName} ${profile.lastName}` : 'MyBarong Member'}</h2>
          <p className="profile-email">{profile.email || 'member@mybarong.ph'}</p>
          <nav className="profile-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`profile-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
                {tab.key === 'orders' && orders.length > 0 && (
                  <span className="profile-tab-badge">{orders.length}</span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        <section className="profile-content">
          {activeTab === 'personal' && (
            <div className="profile-panel">
              <h3>Personal Information</h3>
              <div className="profile-form">
                <div className="profile-form-row">
                  <div className="profile-field">
                    <label>First Name</label>
                    <input
                      type="text"
                      value={personalForm.firstName}
                      onChange={(e) => handlePersonalChange('firstName', e.target.value)}
                      placeholder="Juan"
                    />
                  </div>
                  <div className="profile-field">
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={personalForm.lastName}
                      onChange={(e) => handlePersonalChange('lastName', e.target.value)}
                      placeholder="Dela Cruz"
                    />
                  </div>
                </div>
                <div className="profile-field">
                  <label>Address</label>
                  <input
                    type="text"
                    value={personalForm.address}
                    onChange={(e) => handlePersonalChange('address', e.target.value)}
                    placeholder="14 Calle Real, Intramuros, Manila"
                  />
                </div>
                <div className="profile-form-row">
                  <div className="profile-field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={personalForm.email}
                      onChange={(e) => handlePersonalChange('email', e.target.value)}
                      placeholder="juan@example.com"
                    />
                  </div>
                  <div className="profile-field">
                    <label>Contact Number</label>
                    <input
                      type="tel"
                      value={personalForm.contact}
                      onChange={(e) => handlePersonalChange('contact', e.target.value)}
                      placeholder="+63 912 345 6789"
                    />
                  </div>
                </div>
                <button type="button" className="profile-save-btn" onClick={handleSavePersonal}>
                  SAVE CHANGES
                </button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="profile-panel">
              <h3>Change Password</h3>
              <div className="profile-form">
                <div className="profile-field">
                  <label>Current Password</label>
                  <input
                    type="password"
                    value={securityForm.currentPassword}
                    onChange={(e) => handleSecurityChange('currentPassword', e.target.value)}
                    placeholder="Enter current password"
                  />
                </div>
                <div className="profile-field">
                  <label>New Password</label>
                  <input
                    type="password"
                    value={securityForm.newPassword}
                    onChange={(e) => handleSecurityChange('newPassword', e.target.value)}
                    placeholder="Enter new password"
                  />
                </div>
                <div className="profile-field">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    value={securityForm.confirmPassword}
                    onChange={(e) => handleSecurityChange('confirmPassword', e.target.value)}
                    placeholder="Re-enter new password"
                  />
                </div>
                <button type="button" className="profile-save-btn" onClick={handleChangePassword}>
                  UPDATE PASSWORD
                </button>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="profile-panel">
              <h3>Order History</h3>
              {orders.length === 0 ? (
                <p className="profile-empty">No orders yet.</p>
              ) : (
                <div className="profile-orders">
                  {orders.map((order) => (
                    <article key={order.id} className="profile-order-card">
                      <div className="profile-order-head">
                        <div>
                          <span className="profile-order-id">{order.id}</span>
                          <span className="profile-order-date">
                            {new Date(order.date).toLocaleDateString('en-PH', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <span className={`profile-order-status ${order.status}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="profile-order-items">
                        {order.items.map((item) => {
                          const itemReviews = getReviewsForProduct(item.slug)
                          const canReview = order.status === 'delivered' && !itemReviews.some(
                            (r) => r.orderId === order.id && r.slug === item.slug && r.size === item.size
                          )
                          const isReviewing = reviewingOrder?.orderId === order.id && reviewingOrder?.slug === item.slug && reviewingOrder?.size === item.size

                          return (
                            <div key={`${item.slug}-${item.size}`} className="profile-order-item">
                              <img src={item.image} alt={item.name} />
                              <div>
                                <h4>{item.name}</h4>
                                <span>Qty: {item.quantity}</span>
                              </div>
                              <span className="profile-order-item-price">
                                ₱{(item.price * item.quantity).toLocaleString('en-PH')}
                              </span>
                              <div className="profile-order-item-action">
                                {canReview && !isReviewing && (
                                  <button
                                    type="button"
                                    className="profile-review-btn"
                                    onClick={() => handleWriteReview(order.id, item.slug, item.size)}
                                  >
                                    WRITE REVIEW
                                  </button>
                                )}
                                {isReviewing && (
                                  <div className="profile-review-form">
                                    <div className="profile-stars-input">
                                      {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                          key={star}
                                          type="button"
                                          className={`profile-star ${star <= reviewRating ? 'active' : ''}`}
                                          onClick={() => setReviewRating(star)}
                                        >
                                          ★
                                        </button>
                                      ))}
                                    </div>
                                    <textarea
                                      value={reviewText}
                                      onChange={(e) => setReviewText(e.target.value)}
                                      placeholder="Share your thoughts..."
                                      rows={3}
                                    />
                                    <div className="profile-review-actions">
                                      <button type="button" onClick={() => setReviewingOrder(null)}>Cancel</button>
                                      <button type="button" onClick={handleSubmitReview} disabled={!reviewText.trim()}>
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                      <div className="profile-order-foot">
                        <span>Total: ₱{order.total.toLocaleString('en-PH')}</span>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </main>
  )
}

export default Profile
