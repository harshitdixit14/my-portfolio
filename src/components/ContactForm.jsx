import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  const handleSubmit = async () => {
    if (!isFormValid) return;
    setIsSubmitting(true);
    setSubmitStatus(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus(true);
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    row: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px'
    },
    fieldGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#e2e8f0',
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      outline: 'none',
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      outline: 'none',
      minHeight: '144px',
      resize: 'none',
    },
    button: {
      width: '100%',
      background: isFormValid && !isSubmitting 
        ? 'linear-gradient(to right, #8b5cf6, #ec4899)' 
        : 'linear-gradient(to right, #64748b, #64748b)',
      color: 'white',
      fontWeight: '500',
      padding: '16px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: isFormValid && !isSubmitting ? 'pointer' : 'not-allowed',
      fontSize: '16px',
    },
    statusSuccess: {
      color: '#4ade80',
      background: 'rgba(74, 222, 128, 0.1)',
      padding: '12px',
      borderRadius: '8px'
    },
    statusError: {
      color: '#f87171',
      background: 'rgba(248, 113, 113, 0.1)',
      padding: '12px',
      borderRadius: '8px'
    }
  };

  return (
    <Card
      sx={{
        width: '95%',
        margin: 'auto',
        marginTop: 4,
        padding: 3,
        borderRadius: 4,
        overflow: 'hidden',
        color: '#fff',
        backgroundColor: 'rgba(222, 196, 196, 0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent>
        <h1 style={{ fontFamily:"monospace", fontSize:"30px", marginBottom:"10px" }}>Drop a Message !!</h1>
        <p style={{ fontFamily:"monospace", fontSize:"20px" }}>Have a project in mind? I'd love to hear from you.</p>

        <div style={styles.formContainer}>
          {/* Name + Email */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>📝 Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>📧 Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
            </div>

          {/* Subject */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} style={styles.input} />
          </div>

          {/* Message */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>💬 Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} style={styles.textarea} />
          </div>

          {/* Status */}
          {submitStatus === true && <div style={styles.statusSuccess}>✅ Message sent successfully!</div>}
          {/* {submitStatus === false && <div style={styles.statusError}>❌ Something went wrong.</div>} */}

          {/* Button */}
          <button onClick={handleSubmit} disabled={!isFormValid || isSubmitting} style={styles.button}>
            {isSubmitting ? "Sending..." : "📤 Send Message"}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
