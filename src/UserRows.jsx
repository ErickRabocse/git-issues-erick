const UserRows = ({ usuario, id, title, link, labels }) => {
  return (
    <tr>
      <td className="user_data">{usuario}</td>
      <td className="user_id">{id}</td>
      <td className="user_title">
        <a className="title_link" href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </td>
      <td className="user_labels">{labels}</td>
    </tr>
  );
};

export default UserRows;
