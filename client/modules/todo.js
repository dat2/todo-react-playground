export function createEditAction(text) {
  return { type: 'EDIT', text };
}

export function createCompleteAction(completed) {
  return { type: 'COMPLETE', completed };
}

const initialState = { text: '', completed: false };

export default function todo(state = initialState, action) {
  switch(action.type) {
    case 'EDIT':
      return {
        ...state,
        text: action.text
      };

    case 'COMPLETE':
      return {
        ...state,
        completed: action.completed
      };
  }

  return state;
}
