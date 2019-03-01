export const uploadFile = image => {
  return new Promise((resolve, reject) => {
    var url = "https://api.cloudinary.com/v1_1/<cloud_name>/image/upload";
    var fd = new FormData();
    // create you upload_present at
    // https://cloudinary.com/console/settings/upload
    fd.append("upload_preset", "<present_name>");
    fd.append("tags", "browser_upload");
    fd.append("file", image);
    fetch(url, {
      method: "POST",
      body: fd
    })
      .then(response => response.json())
      .then(res => resolve(res.secure_url))
      .catch(err => reject(err));
  });
};
