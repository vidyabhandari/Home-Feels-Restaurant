import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Verify.css'; // Create this CSS file for styling

const VerifyPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState('processing');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const success = queryParams.get('success');

    if (success === 'true') {
      setStatus('success');
    } else {
      setStatus('failed');
    }
  }, [location]);

  return (
    <div className="verification-container">
      {status === 'processing' && (
        <div className="processing">
          <h2>Processing your payment...</h2>
          <div className="loader"></div>
        </div>
      )}

      {status === 'success' && (
        <div className="success">
          <h2>Payment Successful!</h2>
          <p>Your order has been placed successfully.</p>
          <button className='verify-button' onClick={() => navigate('/orders')}>View Orders</button>
        </div>
      )}

      {status === 'failed' && (
        <div className="failed">
          <h2>Payment Failed</h2>
          <p>There was an issue processing your payment.</p>
          <button className='verify-button' onClick={() => navigate('/cart')}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default VerifyPayment;