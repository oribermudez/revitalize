export default function FormItem({
  formName,
  createdDate,
  updatedDate,
  isSigned,
  onView,
}) {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedCreatedDate = new Date(createdDate).toLocaleDateString("en-US", options);
  const formattedUpdatedDate = new Date(updatedDate).toLocaleDateString("en-US", options);

  return (
    <div className="flex m-4">
      <ul className="p-2 bg-blue-400" style={{ width: '400px' }}>
        <li>Form Name: {formName}</li>
        <li>Created: {formattedCreatedDate}</li>
        <li>Updated: {formattedUpdatedDate}</li>
        <li>Signed: {isSigned ? 'Yes' : 'No'}</li>
      </ul>
      <button className="bg-orange-400 p-2" onClick={onView}>
        View
      </button>
    </div>
  );
}