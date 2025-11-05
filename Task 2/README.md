# 🧩 React Components & Props 

Welcome back, React warriors! 🎉 Ready to dive deeper into the awesome world of Components and Props? Let's build some cool stuff!

## 🚀 What We're Learning Today

After mastering JSX basics, now it's time to become a **Component Master** and **Props Wizard**! 🧙‍♂️

### 🎯 Today's Mission:

- Master creating reusable components
- Become a Props ninja
- Learn different ways to structure components
- Build a mini component library!
- **NEW:** Learn professional component organization!

## 📁 Project Structure

This project demonstrates professional React component organization:

```
src/
├── components/          # 🧩 All components organized here!
│   ├── Superhero.tsx    # TypeScript interfaces & optional props
│   ├── PizzaCard.tsx    # Arrays, booleans & union types  
│   ├── SongCard.tsx     # Object props & nested data
│   ├── StarRating.tsx   # Function props & events
│   ├── Card.tsx         # Children props & composition
│   └── StudentCard.tsx  # Default props & fallbacks
├── App.tsx              # Main app importing all components
├── main.tsx             # Entry point
└── assets/              # Static files
```

## 🧩 Components Deep Dive

Think of components as your own custom HTML tags that you invent!

### 1. 🏗️ Basic Component Structure

```jsx
function MyComponent() {
  return <h1>Hello from my component!</h1>;
}

// Use it like this:
<MyComponent />
```

### 2. 🎁 Components with Props (The Fun Part!)

```jsx
function Superhero({ name, power, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <h2>🦸‍♂️ {name}</h2>
      <p>Superpower: {power}</p>
    </div>
  );
}

// Use it like this:
<Superhero name="Spider-Man" power="Web-slinging" color="red" />
<Superhero name="Batman" power="Being rich" color="black" />
```

### 3. 🔧 Props with TypeScript (Making it Professional!)

```jsx
// Define what props your component expects
interface SuperheroProps {
  name: string;
  power: string;
  color: string;
  age?: number; // The ? means this prop is optional!
}

function Superhero({ name, power, color, age }: SuperheroProps) {
  return (
    <div style={{ backgroundColor: color }}>
      <h2>🦸‍♂️ {name}</h2>
      <p>Superpower: {power}</p>
      {age && <p>Age: {age}</p>}
    </div>
  );
}
```

## 🎨 Different Types of Props

### 1. 📝 String Props

```jsx
<MovieCard title="The Avengers" genre="Action" />
```

### 2. 🔢 Number Props

```jsx
<RatingCard rating={9.5} year={2012} />
```

### 3. ✅ Boolean Props

```jsx
<Button isDisabled={false} isPrimary={true} />
```

### 4. 📋 Array Props

```jsx
<TagList tags={["React", "JavaScript", "Fun"]} />
```

### 5. 🎭 Object Props

```jsx
const user = { name: "Alice", age: 25, city: "Tokyo" };
<UserCard user={user} />
```

### 6. 🎯 Function Props (Event Handlers)

```jsx
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

// Usage:
<Button onClick={() => alert("Clicked!")}>
  Click me!
</Button>
```

## 🌟 Advanced Component Patterns

### 1. 📦 Component Composition (Building Blocks)

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function CardHeader({ title }) {
  return <h3>{title}</h3>;
}

function CardBody({ content }) {
  return <p>{content}</p>;
}

// Use them together:
<Card>
  <CardHeader title="My Awesome Card" />
  <CardBody content="This is the card content!" />
</Card>
```

### 2. 🎛️ Default Props

```jsx
function Welcome({ name = "Friend", emoji = "👋" }) {
  return <h1>{emoji} Hello, {name}!</h1>;
}

// Both work:
<Welcome name="Alice" emoji="🎉" />
<Welcome /> {/* Uses defaults: Friend and 👋 */}
```

### 3. 🔄 Props Destructuring (Clean Code!)

```jsx
// Instead of this:
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.age}</p>
    </div>
  );
}

// Do this (much cleaner!):
function UserCard({ name, email, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age}</p>
    </div>
  );
}
```

## 📁 Professional Component Organization

### 🎯 Why Separate Component Files?

- **Maintainability** - Easy to find and edit components
- **Reusability** - Import components anywhere
- **Collaboration** - Multiple developers can work on different components
- **Testing** - Test components in isolation
- **Code Splitting** - Better performance

### 📝 File Naming Conventions:

- Use **PascalCase** for component files: `SuperheroCard.tsx`
- Match **file name** with **component name**
- Use `.tsx` extension for TypeScript + JSX

### 🔄 Import/Export Patterns:

```jsx
// In Superhero.tsx
function Superhero({ name, power }: SuperheroProps) {
  // component logic
}

export default Superhero; // Default export

// In App.tsx
import Superhero from './components/Superhero'; // Import
```

## 🎮 Today's Live Examples

Explore these components in the `src/components/` folder:

1. **🦸‍♂️ Superhero.tsx** - TypeScript interfaces & optional props
2. **🍕 PizzaCard.tsx** - Array props, boolean props, union types
3. **🎵 SongCard.tsx** - Object props & nested data structures
4. **⭐ StarRating.tsx** - Function props & interactive events
5. **🎨 Card.tsx** - Children props & component composition
6. **🎓 StudentCard.tsx** - Default props & fallback values

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```
2. **Start the dev server:**

   ```bash
   pnpm dev
   ```
3. **Open browser:** `http://localhost:5173`
4. **Explore the components folder!** 📁

## 🎯 Learning Goals

By the end of this class, you'll be able to:

- ✅ Create reusable components like a pro
- ✅ Pass any type of data through props
- ✅ Use TypeScript interfaces for props
- ✅ Apply component composition patterns
- ✅ Organize components in separate files
- ✅ Build a component library from scratch!

## 🎪 Component Challenges

Try creating these in separate component files:

1. **🎬 MovieCard.tsx** - title, director, year, rating
2. **🚗 CarCard.tsx** - make, model, year, color
3. **🍔 RestaurantCard.tsx** - name, cuisine, rating, location
4. **📱 PhoneCard.tsx** - brand, model, price, features[]
5. **🎨 ColorPicker.tsx** - colors[], onColorSelect function

## 💡 Pro Tips

- **Keep components small and focused** - one job per component!
- **Use descriptive prop names** - `isLoading` instead of `loading`
- **Always add TypeScript types** - your future self will thank you!
- **Think "reusable"** - could this component be used elsewhere?
- **Organize files logically** - group related components
- **Export/Import consistently** - stick to one pattern

## 🔥 What's Next?

Next class we'll learn about **State** - making your components interactive and reactive! But for now, let's master component organization and props!
