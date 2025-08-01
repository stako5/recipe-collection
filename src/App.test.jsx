import { render, screen } from '@testing-library/react';
import App from './App';

test('As a Chef, I want to store my recipes so that I can keep track of them.', () => {
  render(<App />);

    let recipeHeader = screen.getByText('My Recipes');
  expect(recipeHeader).toBeInTheDocument();

  // 4. And I should see text beneath the heading that reads "There are no recipes to list" 
  let recipeList = screen.getByText('There are no recipes to list.');
  expect(recipeList).toBeInTheDocument();

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
  expect(recipeHeader.compareDocumentPosition(recipeList)).toBe(4);
});