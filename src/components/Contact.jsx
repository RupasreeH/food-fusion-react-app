const Contact = () => {
  return (
    <div>
      <h1 className="font-black text-3xl m-4 p-4">Contact US Page</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="Message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
