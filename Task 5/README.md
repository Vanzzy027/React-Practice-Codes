# ⚡ useEffect Hook Learning Project

This project teaches React's **useEffect** hook for handling side effects and component lifecycle. Perfect for trainees who understand **useState** and **useReducer** and are ready to learn about side effects.

## 🎯 Learning Objectives

By completing this lesson, trainees will understand:

- ✅ What side effects are in React
- ✅ When and why to use `useEffect`
- ✅ Different useEffect dependency patterns
- ✅ How to clean up side effects properly
- ✅ Common useEffect use cases and patterns

## 🚀 Project Features

### Interactive Examples

1. **Counter with Side Effects** - Document title updates, console logging
2. **Data Fetching Simulation** - API call patterns with loading states
3. **Timer with Cleanup** - setInterval management and cleanup
4. **Event Listeners** - Window resize detection with proper cleanup

### Educational Components

- **Live Console Logging** - See useEffect in action
- **Visual State Updates** - Real-time feedback
- **Cleanup Demonstrations** - Memory leak prevention
- **Pattern Explanations** - When to use each approach

## 🛠️ Tech Stack

- **React 18** - Latest React features
- **TypeScript** - Type-safe development
- **Vite** - Fast development server
- **CSS-in-JS** - Inline styling for simplicity

## 📚 Key useEffect Patterns

### 1. No Dependencies - Runs Every Render

```typescript
useEffect(() => {
  console.log('Runs on every render')
})
```

⚠️ **Use carefully** - Can cause performance issues

### 2. Empty Dependencies - Runs Once (Mount)

```typescript
useEffect(() => {
  console.log('Runs only once when component mounts')
  // Perfect for: API calls, subscriptions, initial setup
}, [])
```

✅ **Most common** for initialization

### 3. With Dependencies - Runs When Dependencies Change

```typescript
useEffect(() => {
  console.log('Runs when count changes')
  document.title = `Count: ${count}`
}, [count])
```

✅ **Selective updates** based on specific values

### 4. With Cleanup - Prevents Memory Leaks

```typescript
useEffect(() => {
  const timer = setInterval(() => {
    setSeconds(prev => prev + 1)
  }, 1000)

  // Cleanup function
  return () => {
    clearInterval(timer)
  }
}, [])
```

✅ **Essential** for timers, listeners, subscriptions

## 🎓 Teaching Flow (60 minutes)

### 1. Introduction (10 minutes)

- What are side effects?
- Why can't we use them directly in render?
- Introduce useEffect concept

### 2. Basic Patterns (15 minutes)

- No dependencies example
- Empty dependencies example
- Console logging demonstration

### 3. Dependencies (15 minutes)

- When to use dependencies
- How React compares dependencies
- Common dependency mistakes

### 4. Cleanup (15 minutes)

- Why cleanup is important
- Timer cleanup example
- Event listener cleanup

### 5. Practice & Q&A (5 minutes)

- Let trainees experiment
- Common questions and gotchas

## 🔍 What Are Side Effects?

Side effects are operations that affect something outside the component:

| Side Effect               | Example                  | useEffect Pattern     |
| ------------------------- | ------------------------ | --------------------- |
| **API Calls**       | `fetch('/api/users')`  | Empty deps `[]`     |
| **Timers**          | `setInterval()`        | With cleanup          |
| **Event Listeners** | `addEventListener()`   | With cleanup          |
| **DOM Updates**     | `document.title = ...` | With deps `[value]` |
| **Subscriptions**   | WebSocket connections    | With cleanup          |

## 🎯 Interactive Examples in This Project

### 📊 Counter Example

- **Purpose**: Shows useEffect running on state changes
- **Pattern**: Dependencies `[count]`
- **Learn**: How useEffect responds to state updates

### 👤 User Data Example

- **Purpose**: Simulates API calls and loading states
- **Pattern**: Empty dependencies `[]`
- **Learn**: One-time side effects on mount

### ⏱️ Timer Example

- **Purpose**: Demonstrates cleanup to prevent memory leaks
- **Pattern**: Cleanup function with `return`
- **Learn**: Managing ongoing side effects

### 📐 Resize Example

- **Purpose**: Shows event listener management
- **Pattern**: Event cleanup on unmount
- **Learn**: Browser API integration

## 🚨 Common Mistakes to Avoid

### 1. Missing Dependencies

```typescript
// ❌ Wrong - missing count dependency
useEffect(() => {
  console.log(count)
}, [])

// ✅ Correct - includes count dependency
useEffect(() => {
  console.log(count)
}, [count])
```

### 2. Forgetting Cleanup

```typescript
// ❌ Wrong - memory leak
useEffect(() => {
  setInterval(() => tick(), 1000)
}, [])

// ✅ Correct - proper cleanup
useEffect(() => {
  const timer = setInterval(() => tick(), 1000)
  return () => clearInterval(timer)
}, [])
```

### 3. Infinite Loops

```typescript
// ❌ Wrong - creates infinite loop
const [user, setUser] = useState({})
useEffect(() => {
  setUser({ name: 'John' }) // Creates new object every time
}, [user]) // user changes every render

// ✅ Correct - stable dependency
useEffect(() => {
  setUser({ name: 'John' })
}, []) // Empty dependency array
```

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```
2. **Start development server:**

   ```bash
   pnpm dev
   ```
3. **Open browser and console:**

   - Navigate to `http://localhost:5173`
   - Open DevTools Console (F12)
   - Interact with examples to see useEffect logs

## 📝 Assignment Ideas

### Beginner Level

- Add a new counter that updates page title
- Create a clock that shows current time
- Add a button click counter with logging

### Intermediate Level

- Build a weather app that fetches data on mount
- Create a scroll position tracker
- Add keyboard event listeners

### Advanced Level

- Implement debounced search with API calls
- Create a chat app with WebSocket cleanup
- Build a mouse position tracker with throttling

## 🎯 Next Steps

After mastering useEffect, trainees should explore:

- **Custom Hooks** - Reusable effect logic
- **useCallback & useMemo** - Performance optimization
- **useContext** - Global state management
- **Error Boundaries** - Error handling patterns

## 📖 Additional Resources

- [React useEffect Documentation](https://react.dev/reference/react/useEffect)
- [useEffect Complete Guide](https://overreacted.io/a-complete-guide-to-useeffect/)
- [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
- [Common useEffect Mistakes](https://react.dev/learn/escape-hatches#you-might-not-need-an-effect)

## 🔧 Developer Notes

### Browser Console Usage

This project heavily uses `console.log()` for educational purposes. Trainees should:

1. Keep DevTools console open
2. Watch logs as they interact
3. Understand the timing of useEffect calls

### Performance Considerations

- The examples prioritize learning over performance
- In production, consider useCallback/useMemo for optimization
- Debounce/throttle frequent effects (resize, scroll)

---

**Happy Learning! 🎉**

*This project is part of the React Learning Curriculum - Week 7*

## 🏆 Learning Outcomes

After completing this lesson, trainees will be able to:

- ✅ Choose the correct useEffect pattern for any scenario
- ✅ Implement proper cleanup to prevent memory leaks
- ✅ Debug useEffect dependency issues
- ✅ Build apps with side effects confidently
- ✅ Understand React component lifecycle deeply
