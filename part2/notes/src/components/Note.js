const Note = ({ note }) => {
  const impText = note.important ? "Important!" : ""
  return (
    <>
    <li>{note.content} </li>
    <b>{impText}</b>
    </>

  )
}

export default Note