
import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const location = form.location.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const user={name,location,email,phone,address}
    console.log(user);

    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res=> res.json())
    .then(data=>  {
      console.log(data);
      if(data.insertedId){
        alert('user added successfully');
        form.reset();
      }
    })
  };

  return (
    <div>
      <title>HOME SERVICE CLEAN | Contact Us</title>

      <div className="w-full">
        <div className="bg-[#3057ad] lg:max-w-full rounded-lg mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8 sm:p-10 p-4 font-sans">
            <div>
              <div className="flex gap-2">
                <img src="" alt="Contact Us" className="w-[100px] rounded-lg outline avatar h-auto" />
                <h1 className="text-4xl font-bold font-serif text-white mt-4">
                  Affordable Price For Deep <span className="text-3xl text-green-500 font-mono space-x-1">Home Cleaning Servicing</span>
                </h1>
              </div>
              <p className="text-red-300 mt-3 text-1xl">
                We Provide 24 Hours Services and Our | Email| Location| Is Available. You Can Contact us For Any Problem Or Need...!
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      NAME*
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full border input-bordered input-info rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      LOCATION*
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="mt-1 block w-full border input-bordered input-accent rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      EMAIL*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full border input-bordered input-warning rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      PHONE*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="mt-1 block w-full border input-bordered input-secondary rounded-md shadow-sm p-2"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="address"
                    rows="4"
                    className="mt-1 block w-full border input-bordered input-primary rounded-md shadow-sm p-2"
                  ></textarea>
                </div>
                <div className="mt-6 text-right">
                  <input type="submit" value="Submit" className="bg-blue-500 text-white px-4 py-2 rounded" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
