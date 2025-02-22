document.addEventListener("DOMContentLoaded", async () => {
    const provinceSelect = document.getElementById("province");
    const districtSelect = document.getElementById("district");
    const communeSelect = document.getElementById("commune");
    async function fetchProvinces() {
        try 
        {
            const response = await axios.get("https://provinces.open-api.vn/api/p/");
            response.data.forEach(province => {
                const option = document.createElement("option");
                option.value = province.code;
                option.textContent = province.name;
                provinceSelect.appendChild(option);
            });
        } catch (error) {
            console.error("Error fetching provinces:", error);
        }
    }

    provinceSelect.addEventListener("change", async function() {
        districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
        communeSelect.innerHTML = '<option value="">Chọn xã/phường</option>';
        if (!this.value) return;
        try {
            const response = await axios.get(`https://provinces.open-api.vn/api/p/${this.value}?depth=2`);
            response.data.districts.forEach(district => {
              
                const option = document.createElement("option");
                option.value = district.code;
                option.textContent = district.name;
                districtSelect.appendChild(option);
            });
        } catch (error) {
            console.error("Error fetching districts:", error);
        }
    });

    districtSelect.addEventListener("change", async function() {
        communeSelect.innerHTML = '<option value="">Chọn xã/phường</option>';
        if (!this.value) return;
        try {
            const response = await axios.get(`https://provinces.open-api.vn/api/d/${this.value}?depth=2`);
            response.data.wards.forEach(commune => {
                const option = document.createElement("option");
                option.value = commune.code;
                option.textContent = commune.name;
              
                communeSelect.appendChild(option);
            });
        } catch (error) {
            console.error("Error fetching communes:", error);
        }
    });

    fetchProvinces();
});


