

const update_user = document.getElementById("update_user");

if (update_user) {
  update_user.addEventListener("submit", (e) => {
    e.preventDefault();
    new FormData(update_user);
  });

  update_user.addEventListener("formdata", (e) => {
    // Get the form data from the event object
    let data = e.formData;
    console.log(data)
    const datas = Array.from(data.entries());
    console.log(datas)
    const obj = Object.fromEntries(datas);

    //Put request to specified api
    axios
      .put(`http://localhost:3000/api/users/${obj.id}`, {
        data: obj,
      })
      .then((res) => {
        alert("Updated");
        window.location.replace('/')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}

document.querySelectorAll(".delete").forEach((item) => {
  item.addEventListener("click", (e) => {
    const specific_btn = e.target;
    const id = specific_btn.dataset.id;
    if (confirm("Do you want to delete")) {
      axios
        .delete(`http://localhost:3000/api/users/${id}`)
        .then((res) => {
          location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});
