import React, { useState } from 'react';

const DemoModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', profession: '' });
    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone number required';
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form submitted successfully! (Demo Data Validated)');
            onClose();
        }
    };

    return (
        <div className="modal-overlay">
            <div className="card modal-content animate-fade-in">
                <div className="window-bar">
                    <span></span><span></span><span></span>
                </div>
                <h2>Form Validation</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    {errors.name && <small className="error">{errors.name}</small>}

                    <label>Contact Number</label>
                    <input type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    {errors.phone && <small className="error">{errors.phone}</small>}

                    <label>Email</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    {errors.email && <small className="error">{errors.email}</small>}

                    <label>Profession</label>
                    <input type="text" value={formData.profession} onChange={e => setFormData({...formData, profession: e.target.value})} />

                    <div className="form-actions">
                        <button type="submit" className="btn">Submit</button>
                        <button type="button" className="btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DemoModal;
