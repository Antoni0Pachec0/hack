const contract = "owaguestbook.testnet";
const total_messages = Near.view(contract, "total_messages");
const messagesResult = Near.view(contract, "get_messages", {
  from_index: total_messages - 10,
});

const messages = Array.isArray(messagesResult) ? messagesResult.reverse() : [];

State.init({
  new_message: "",
});

const addMessage = () => {
  if (!state.new_message) {
    return console.log("El campo no puede estar vacío");
  }

  Near.call(contract, "add_message", {
    text: state.new_message,
  });
};

const messageForm = (
  <>
    <div class="border border-black p-3">
      <label>Subasta</label>
      <input
        type="number"
        placeholder="Ingrese una cantidad"
        onChange={(e) => State.update({ new_message: e.target.value })}
      />
      <button class="btn btn-primary mt-2" onClick={addMessage}>
        Enviar
      </button>
    </div>
  </>
);

const notLoggedInWarning = (
  <p class="text-center py-2">
    Debes iniciar sesión para poder enviar una propuesta
  </p>
);

// Render
return (
  <div class="container border border-info p-3">
    <h3 class="text-center">Compra el siguiente avatar</h3>
    <div class="d-flex">
      {/* Lado izquierdo con imagen */}
      <div class="border border-black p-3">
        {/* Aquí puedes colocar tu imagen */}
        <img src="ruta/a/tu/imagen.jpg" alt="Imagen de subasta" />
      </div>

      {/* Lado derecho con nombre, mensaje, input y lista */}
      <div class="border border-black p-3">
        <h1 class="text-black">NFTMAL</h1>
        {/* Agrega el mensaje debajo del nombre */}
        <p>Descripcion</p>

        {/* Formulario de subasta */}
        {context.accountId ? messageForm : notLoggedInWarning}

        {/* Lista de subastas */}
        <div class="border border-black p-3">
          <h3>
            <b>Lista</b>
          </h3>
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Usuario:</th>
                <th>Cantidad:</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((data, key) => {
                return (
                  <tr key={key}>
                    <td>{data.sender}</td>
                    <td>{data.text}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);