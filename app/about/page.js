'use client';

import { useForm } from '@formspree/react';
import aboutData from '../../data/pages/about.json';

export default function AboutPage() {
  const { state, handleSubmit } = useForm("your-form-id");

  return (
    <div>
      <h1>{aboutData.frontmatter.title}</h1>
      <p>{aboutData.frontmatter.description}</p>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Your email" required />
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
        {state.succeeded && <p>Thanks for your submission!</p>}
      </form>
    </div>
  );
}
