import html from "html-literal";

export default () => html`
  <section id="order">
    <form
      id="order"
      method="POST"
      action="" >

      <h2>Schedule an Appointment</h2>
      <div>
        <label for="patient">Patient</label>
        <input
          type="text"
          name="patient"
          id="patient"
          placeholder="Enter Patient's Name"
        />
      </div>
      <div>
        <label for="form">Form:</label>
        <select id="form" name="form">
          <option value="" hidden>Select a Form</option>
          <option value="consultation">Consultation</option>
          <option value="checkup">Existing Patient</option>
          <option value="free">Consult with a nurse</option>
          <option value="renew">Renew a material</option>
        </select>
      </div>
      <d>

        <label for="treatment">Treatment:</label>
        <input
          type="text"
          name="treatment"
          id="treatment"
          placeholder="Select a Treatment"
          required
        />
      <label for="new">New Patient</label>
        <input
          type="Checkbox"
          id="new"
          name="new"
          value="New Patient"
        />

        <label for="existing">Existing Patient</label>
        <input
          type="Checkbox"
          id="existing"
          name="existing"
          value="existing"
        />
        <input type="submit" name="submit" value="Schedule Appointment"/>
        </form>
      </section>
    `;
