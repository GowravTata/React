export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  console.log(`Number of items  are ${numItems}`);
  console.log(`Percentage of items packed are ${percentage}`);
  console.log(`Number of items packed are ${numPacked}`);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything to go! Ready to go 🛫"
          : `💼 You have ${numItems} items on your list, you already packed
        ${numPacked} ${percentage}%`}
      </em>
    </footer>
  );
}
