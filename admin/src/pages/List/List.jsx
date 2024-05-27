import React, { useEffect, useState } from 'react';
import './List.css';
import { url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const [list, setList] = useState([]);
  const [priceInputs, setPriceInputs] = useState({}); // Object to store price inputs for each item
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
        setPriceInputs(response.data.data.reduce((acc, item) => {
          acc[item._id] = item.price;
          return acc;
        }, {}));
      } else {
        throw new Error('Failed to fetch list');
      }
    } catch (error) {
      setError(error.message);
      toast.error("Error fetching list");
    } finally {
      setLoading(false);
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error removing food");
      }
    } catch (error) {
      toast.error("Error removing food");
    }
  };

  const updateFoodPrice = async (foodId, newPrice) => {
    try {
      const response = await axios.post(`${url}/api/food/update-price`, {
        id: foodId,
        price: newPrice,
      });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        throw new Error('Error updating price');
      }
    } catch (error) {
      toast.error("Error updating price");
    }
  };

  const handlePriceChange = (foodId, price) => {
    setPriceInputs({
      ...priceInputs,
      [foodId]: price,
    });
  };

  useEffect(() => {
    fetchList();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item) => (
          <div key={item._id} className="list-table-format">
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <div className="price-input">
              <input
                type="number"
                value={priceInputs[item._id]}
                onChange={(e) => handlePriceChange(item._id, e.target.value)}
              />
              <button onClick={() => updateFoodPrice(item._id, priceInputs[item._id])}>Update</button>
            </div>
            <p className="cursor" onClick={() => removeFood(item._id)}>x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
