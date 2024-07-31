import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import IssueForm from './IssueForm';

describe('IssueForm', () => {
  it('renders the IssueForm and submits correctly', async () => {
    render(<IssueForm />);

    // Ensure the form renders correctly
    expect(screen.getByText('Register Issue')).toBeInTheDocument();

    // Simulate form inputs and submission
    fireEvent.change(screen.getByLabelText(/vehicle/i), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText(/component/i), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Test description' } });
    fireEvent.change(screen.getByLabelText(/repair price/i), { target: { value: '100' } });
    fireEvent.click(screen.getByLabelText(/repair/i));

    fireEvent.click(screen.getByText('Submit'));

    // Check if the success message is displayed
    expect(screen.getByText('Issue registered successfully')).toBeInTheDocument();
  });
});
