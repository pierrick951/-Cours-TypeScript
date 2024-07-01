type GreetingType = {
  name: string;
};


const Greeting = (props: GreetingType) => {
  return <p>Hello {props.name ?? 'default'}</p>
}

export default function App() {
  return (
    <div className="bg-red-400 text-white p-2">
      <Greeting name="John Doe" />
      <Greeting name="John Doe" />
      <Greeting name="John Doe" />
      <Greeting name="John Doe" />
      <Greeting name="John Doe" />
    </div>
  )
}
