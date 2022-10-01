import React, { useEffect } from 'react';
import { FaRecycle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/message/messageSlice';
import './Greeting.scss';

const Greeting = () => {
  const message = useSelector((state) => state.message.message);
  const pending = useSelector((state) => state.message.pending);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  const { content: greeting } = message;

  return (
    <main className="greeting-page">
      <section className="greeting-container">
        <p className="greeting">{greeting}</p>
        <button
          className="greeting-btn"
          type="button"
          onClick={() => dispatch(fetchMessage())}
        >
          <FaRecycle />
          <p>Message</p>
        </button>
      </section>
      {pending && (
        <div className="greeting-loading">
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
    </main>
  );
};

export default Greeting;
