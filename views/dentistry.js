import html from "html-literal";

export default state => html`
  <section id="dental">
    <table id="dental">
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>Patient</th>
      </tr>
      ${state.patients
        .map(dental => {
          return `<tr>
          <td>$</td>
          <td>$</td>
          <td>$</td>
          <td>$</td>
          <td>$</td>
        </tr>`;
        })
        .join("")}
    </table>
  </section>
`;
