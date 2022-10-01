import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/message/messageSlice';
import './Greeting.scss';

const Greeting = () => {
  const message = useSelector((state) => state.message.message);
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
          Get Random Message
        </button>
      </section>
    </main>
  );
};

export default Greeting;
