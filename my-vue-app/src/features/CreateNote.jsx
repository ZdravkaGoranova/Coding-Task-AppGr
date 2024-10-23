const CreateNote = ({
  inputTitle,
  setInputTitle,
  inputContent,
  setInputContent,
  saveHandler

}) => {
  return (
    <>
      <form action="#"className="create-note">
        <div className="form-group">
          <label htmlFor="title">Note title:</label>
          <input type="text" id='title' name='title' value={inputTitle} placeholder="Enter title"
            onChange={(e) => {
              e.preventDefault()
              console.log(e.target.value);
              setInputTitle(e.target.value);
            }} />
        </div>

        <textarea id="content" name="content" rows="4" cols="50"
          value={inputContent} placeholder="Enter content..."
          onChange={(e) => {
            e.preventDefault()
            console.log(e.target.value);
            setInputContent(e.target.value)
          }}>
          At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
        </textarea>
        <button type="submit" className="btn btn-primary" 
        onClick={saveHandler}>Save</button>
      </form>


    </>);
};

export default CreateNote;