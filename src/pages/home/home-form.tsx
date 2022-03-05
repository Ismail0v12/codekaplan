import React from 'react';

function HomeForm() {
  return (
    <form className="home__form">
      <h4>To change your feature</h4>
      <input type="text" className="input-custom" placeholder="Select the Program"/>
      <input type="text" className="input-custom" placeholder="Name" name="name" required={true}/>
      <input type="email" className="input-custom" placeholder="Email" name="email" required={true}/>
      <button type="submit" className="button-filled">Get more info</button>
    </form>
  );
}

export default HomeForm;