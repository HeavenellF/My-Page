export default function PageNav({ items }) {
  return (
    <nav>
      {items.map(item => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  )
}