import {createContext, useState, useEffect, useContext} from 'react';
import axios from 'axios';

const CovidContext = createContext();

export const useCovidData = () => useContext(CovidContext);

export const CovidProvider = ({children}) => {
  const [globalData, setGlobalData] = useState(null);
  const [regionGlobalData, setRegionGlobalData] = useState(null);
  const [indoData, setIndoData] = useState(null);
  const [provinsiIndoData, setProvinsiIndoData] = useState([]);
  const [topProvinsiIndoData, setTopProvinsiIndoData] = useState([]);
  const [formData, setFormData] = useState({
    provinsi: '',
    status: 'confirmed',
    jumlah: 0,
  });

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        const response = await axios.get('../../src/utils/constants/global.json');
        setGlobalData(response.data.global.global);
      } catch (error) {
        console.error('Error fetching global data:', error);
      }
    };

    const fetchRegionGlobalData = async () => {
      try {
        const response = await axios.get('../../src/utils/constants/global.json');
        setRegionGlobalData(response.data.global.regions);
      } catch (error) {
        console.error('Error fetching region global data:', error);
      }
    };

    const fetchIndoData = async () => {
      try {
        const response = await axios.get('../../src/utils/constants/indonesia.json');
        setIndoData(response.data.indonesia);
      } catch (error) {
        console.error('Error fetching Indonesia data:', error);
      }
    };

    const fetchProvinsiIndoData = async () => {
      try {
        const response = await axios.get('../../src/utils/constants/indonesia.json');
        setProvinsiIndoData(response.data.regions);
      } catch (error) {
        console.error('Error fetching Indonesia province data:', error);
      }
    };

    const fetchTopProvinsiIndoData = async () => {
      try {
        const response = await axios.get('../../src/utils/constants/indonesia.json');
        const topFiveProvinces = response.data.regions.slice(0, 5);
        setTopProvinsiIndoData(topFiveProvinces);
      } catch (error) {
        console.error('Error fetching top Indonesia province data:', error);
      }
    };

    fetchGlobalData();
    fetchIndoData();
    fetchRegionGlobalData();
    fetchProvinsiIndoData();
    fetchTopProvinsiIndoData();
  }, []);

  const addIndonesiaData = (newData) => {
    setProvinsiIndoData((prevData) => {
      const existingProvinceIndex = prevData.findIndex((prov) => prov.name === newData.name);

      if (existingProvinceIndex !== -1) {
        // Update existing province data
        const updatedData = [...prevData];
        const existingProvince = updatedData[existingProvinceIndex];

        // Update the numbers for the given status
        existingProvince.numbers[newData.status] += newData.jumlah;

        return updatedData;
      } else {
        // Add new province data
        return [
          ...prevData,
          {
            name: newData.name,
            numbers: {
              confirmed: newData.status === 'confirmed' ? newData.jumlah : 0,
              recovered: newData.status === 'recovered' ? newData.jumlah : 0,
              treatment: newData.status === 'treatment' ? newData.jumlah : 0,
              death: newData.status === 'death' ? newData.jumlah : 0,
            },
          },
        ];
      }
    });

    setTopProvinsiIndoData((prevData) => {
      const updatedTopProvinsi = [...provinsiIndoData].sort((a, b) => b.numbers.confirmed - a.numbers.confirmed).slice(0, 5);

      return updatedTopProvinsi;
    });
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIndonesiaData({
      name: formData.provinsi,
      status: formData.status,
      jumlah: parseInt(formData.jumlah),
    });
    setFormData({provinsi: '', status: 'confirmed', jumlah: 0});
    console.log(formData, 'formData');
  };

  return (
    <CovidContext.Provider
      value={{
        globalData,
        indoData,
        regionGlobalData,
        provinsiIndoData,
        topProvinsiIndoData,
        addIndonesiaData,
        formData,
        handleChange,
        handleSubmit,
      }}>
      {children}
    </CovidContext.Provider>
  );
};

export default CovidContext;
