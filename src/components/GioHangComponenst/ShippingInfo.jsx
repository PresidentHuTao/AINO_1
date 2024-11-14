import React from 'react';

function ShippingInfo({
  provinces,
  districts,
  wards,
  selectedProvince,
  selectedDistrict,
  selectedWard,
  specificAddress,
  handleProvinceChange,
  handleDistrictChange,
  setSelectedWard,
  setSpecificAddress,
  errors,
  setErrors
}) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="province" className="block text-lg font-semibold mb-2">
          Chọn tỉnh thành:
        </label>
        <select
          id="province"
          value={selectedProvince}
          onChange={handleProvinceChange}
          className={`border rounded p-2 w-full ${errors.province ? "border-red-500" : ""}`}
        >
          <option value="" disabled>Chọn tỉnh thành</option>
          {provinces.map((province) => (
            <option key={province.code} value={province.code}>
              {province.name}
            </option>
          ))}
        </select>
        {errors.province && (
          <p className="text-red-500 text-sm mt-1">{errors.province}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="district" className="block text-lg font-semibold mb-2">
          Chọn quận huyện:
        </label>
        <select
          id="district"
          value={selectedDistrict}
          onChange={handleDistrictChange}
          className={`border rounded p-2 w-full ${errors.district ? "border-red-500" : ""}`}
          disabled={!selectedProvince}
        >
          <option value="" disabled>Chọn quận huyện</option>
          {districts.map((district) => (
            <option key={district.code} value={district.code}>
              {district.name}
            </option>
          ))}
        </select>
        {errors.district && (
          <p className="text-red-500 text-sm mt-1">{errors.district}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="ward" className="block text-lg font-semibold mb-2">
          Chọn phường xã:
        </label>
        <select
          id="ward"
          value={selectedWard}
          onChange={(e) => {
            setSelectedWard(e.target.value);
            setErrors((prev) => ({ ...prev, ward: "" }));
          }}
          className={`border rounded p-2 w-full ${errors.ward ? "border-red-500" : ""}`}
          disabled={!selectedDistrict}
        >
          <option value="" disabled>Chọn phường xã</option>
          {wards.map((ward) => (
            <option key={ward.code} value={ward.code}>
              {ward.name}
            </option>
          ))}
        </select>
        {errors.ward && (
          <p className="text-red-500 text-sm mt-1">{errors.ward}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="specificAddress" className="block text-lg font-semibold mb-2">
          Nhập địa chỉ số nhà cụ thể:
        </label>
        <input
          type="text"
          id="specificAddress"
          value={specificAddress}
          onChange={(e) => {
            setSpecificAddress(e.target.value);
            setErrors((prev) => ({ ...prev, address: "" }));
          }}
          className={`border rounded p-2 w-full ${errors.address ? "border-red-500" : ""}`}
          maxLength={250}
          placeholder="Nhập địa chỉ cụ thể"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>
    </>
  );
}

export default ShippingInfo;