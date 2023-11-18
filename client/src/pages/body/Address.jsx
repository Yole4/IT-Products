import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';

function Address() {
    const navigate = useNavigate();

    const { myAddressList, isAddAddress, setIsAddAddress, addressData, setAddressData, handleAddAddress } = useContext(AuthContext);
    return (
        <>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%', background: '#fff', border: '2px solid #d2d2d2', padding: '20px' }}>
                <div >
                    <h3>My Address</h3>
                </div>
                <hr />

                <div className="form-div" >
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Address</th>
                                <th>Land Mark</th>
                                <th>Country</th>
                                <th>Zip Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myAddressList && myAddressList.length === 0 ? (
                                <div style={{ position: '', width: '90%', color: 'red', margin: '15px 0px 0px 10px', fontSize: '14px' }}>
                                    <span>No Address!</span>
                                </div>
                            ) : (
                                myAddressList && myAddressList.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{`${item.street}. ${item.barangay} ${item.municipality}, ${item.province}`}</td>
                                        <td>{`${item.land_mark}`}</td>
                                        <td>{`${item.country}`}</td>
                                        <td>{item.zip_code}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <button className='btn btn-danger' onClick={() => navigate('/')} style={{ fontSize: '15px', width: '200px' }}>Back</button>
                    <button className='btn btn-primary' onClick={() => setIsAddAddress(true)} style={{ fontSize: '15px', width: '200px' }}>Add New Address</button>
                </div>
            </div>

            {/* Add Address */}
            {isAddAddress && (
                <div className="popup" style={{ fontSize: '15px' }}>
                    <div className="popup-body student-body" onClick={(e) => e.stopPropagation()} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '5px', animation: isAddAddress ? 'animateCenter 0.3s linear' : 'closeAnimateCenter 0.3s linear' }}>

                        <div className="popup-edit">
                            <span style={{ fontWeight: 'bold' }}>Add Address</span>
                        </div>

                        <hr />

                        <form onSubmit={handleAddAddress}>
                            <div className='form-div'>
                                <label htmlFor="">Street</label>
                                <input type="text" className='form-control' value={addressData.street} onChange={(e) => setAddressData((prev) => ({ ...prev, street: e.target.value }))} placeholder='e.g. Sta. Cruz' required />
                            </div>

                            <div style={{ marginTop: '15px' }}>
                                <label htmlFor="">Village (Barangay)</label>
                                <input type="text" className='form-control' value={addressData.barangay} onChange={(e) => setAddressData((prev) => ({ ...prev, barangay: e.target.value }))} placeholder='e.g. Libertad' required />
                            </div>

                            <div style={{ marginTop: '15px' }}>
                                <label htmlFor="">Municipality/City</label>
                                <input type="text" className='form-control' value={addressData.municipality} onChange={(e) => setAddressData((prev) => ({ ...prev, municipality: e.target.value }))} placeholder='e.g. Dapitan City' required />
                            </div>

                            <div style={{ marginTop: '15px' }}>
                                <label htmlFor="">Province/State</label>
                                <input type="text" className='form-control' value={addressData.province} onChange={(e) => setAddressData((prev) => ({ ...prev, province: e.target.value }))} placeholder='e.g. Zamboanga Del Norte' required />
                            </div>

                            <div style={{ marginTop: '15px' }}>
                                <label htmlFor="">Postal Code/Zip Code</label>
                                <input type="number" className='form-control' value={addressData.zipCode} onChange={(e) => setAddressData((prev) => ({ ...prev, zipCode: e.target.value }))} placeholder='Zip Code' required />
                            </div>

                            <div style={{ marginTop: '15px' }}>
                                <label htmlFor="">Country</label>
                                <input type="text" className='form-control' value={addressData.country} onChange={(e) => setAddressData((prev) => ({ ...prev, country: e.target.value }))} placeholder='e.g. Philippines' required />
                            </div>

                            <div style={{ marginTop: '15px' }}>
                                <label htmlFor="">Land Mark (Additional Address Info)</label>
                                <input type="text" className='form-control' value={addressData.landMark} onChange={(e) => setAddressData((prev) => ({ ...prev, landMark: e.target.value }))} placeholder='e.g. Inside Rice Mailing Corporation' required />
                            </div>

                            <div style={{ justifyContent: 'space-between', marginTop: '25px', display: 'flex' }}>
                                <button className='btn btn-danger' type='button' style={{ width: '80px' }} onClick={() => setIsAddAddress(false)}>Cancel</button>
                                <button className='btn btn-primary' type='submit' style={{ width: '80px' }}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Address
