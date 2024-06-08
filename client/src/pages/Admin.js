// // AdminNewsItems.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import Spinner from '../components/Spinner';

// function AdminNewsItems() {
//   const [loading, setLoading] = useState(false);
//   const [newsItems, setNewsItems] = useState([]);

//   useEffect(() => {
//     const fetchNewsItems = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('/api/admin/newsitems/all');
//         setNewsItems(response.data);
//       } catch (error) {
//         console.error('Error fetching news items:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNewsItems();
//   }, []);

//   const deleteItem = async (newsid) => {
//     try {
//       await axios.delete(`/api/admin/newsitems/delete/${newsid}`);
//       setNewsItems(newsItems.filter(item => item._id !== newsid));
//     } catch (error) {
//       console.error('Error deleting news item:', error);
//     }
//   };

//   return (
//     <Layout>
//       {loading && <Spinner />}

//       {newsItems.length > 0 && (
//         <div className="p-10">
//           <h1 className="text-2xl text-gray-800 mb-5 font-semibold">Admin News Items</h1>
//           <table className="w-full border-2 border-gray-500 p-10">
//             <thead className="w-full">
//               <tr className="w-full">
//                 <th className="border-2 border-gray-500 p-2">Id</th>
//                 <th className="border-2 border-gray-500 p-2">Title</th>
//                 <th className="border-2 border-gray-500 p-2">Posted on</th>
//                 <th className="border-2 border-gray-500 p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {newsItems.map((item) => (
//                 <tr key={item._id}>
//                   <td className="border-2 border-gray-500 p-2">{item._id}</td>
//                   <td className="border-2 border-gray-500 p-2">{item.title}</td>
//                   <td className="border-2 border-gray-500 p-2">{item.createdAt.slice(0, 10)}</td>
//                   <td className="border-2 border-gray-500 p-2 items-center">
//                     <div className="flex justify-end space-x-5 pr-5 mt-5">
//                       <button
//                         className="px-5 py-1 bg-red-700 text-sm text-white"
//                         onClick={() => deleteItem(item._id)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </Layout>
//   );
// }

// export default AdminNewsItems;

// // AdminNewsItems.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import Spinner from '../components/Spinner';
// import { useNavigate } from 'react-router-dom';

// function AdminNewsItems() {
//   const [loading, setLoading] = useState(false);
//   const [newsItems, setNewsItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchNewsItems = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('/api/admin/newsitems/all');
//         setNewsItems(response.data);
//       } catch (error) {
//         console.error('Error fetching news items:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNewsItems();
//   }, []);

//   const deleteItem = async (newsid) => {
//     try {
//       await axios.delete(`/api/admin/newsitems/delete/${newsid}`);
//       setNewsItems(newsItems.filter(item => item._id !== newsid));
//     } catch (error) {
//       console.error('Error deleting news item:', error);
//     }
//   };

//   const editItem = (newsid) => {
//     navigate(`/edit/${newsid}`);
//   };

//   return (
//     <Layout>
//       {loading && <Spinner />}

//       {newsItems.length > 0 && (
//         <div className="p-10">
//           <h1 className="text-2xl text-gray-800 mb-5 font-semibold">Admin News Items</h1>
//           <table className="w-full border-2 border-gray-500 p-10">
//             <thead className="w-full">
//               <tr className="w-full">
//                 <th className="border-2 border-gray-500 p-2">Id</th>
//                 <th className="border-2 border-gray-500 p-2">Title</th>
//                 <th className="border-2 border-gray-500 p-2">Posted on</th>
//                 <th className="border-2 border-gray-500 p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {newsItems.map((item) => (
//                 <tr key={item._id}>
//                   <td className="border-2 border-gray-500 p-2">{item._id}</td>
//                   <td className="border-2 border-gray-500 p-2">{item.title}</td>
//                   <td className="border-2 border-gray-500 p-2">{item.createdAt.slice(0, 10)}</td>
//                   <td className="border-2 border-gray-500 p-2 items-center">
//                     <div className="flex justify-end space-x-5 pr-5 mt-5">
//                       <button
//                         className="px-5 py-1 bg-red-700 text-sm text-white"
//                         onClick={() => deleteItem(item._id)}
//                       >
//                         Delete
//                       </button>
//                       <button
//                         className="px-5 py-1 bg-green-500 text-sm text-white"
//                         onClick={() => editItem(item._id)}
//                       >
//                         Edit
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </Layout>
//   );
// }

// export default AdminNewsItems;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

function AdminNewsItems() {
  const [loading, setLoading] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/admin/newsitems/all');
        setNewsItems(response.data);
      } catch (error) {
        console.error('Error fetching news items:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsItems();
  }, []);

  const deleteItem = async (newsid) => {
    try {
      await axios.delete(`/api/admin/newsitems/delete/${newsid}`);
      setNewsItems(newsItems.filter(item => item._id !== newsid));
    } catch (error) {
      console.error('Error deleting news item:', error);
    }
  };

  const editItem = (newsid) => {
    navigate(`/edit/${newsid}`, { state: { fromAdmin: true } });
  };

  return (
    <Layout>
      {loading && <Spinner />}

      {newsItems.length > 0 && (
        <div className="p-10">
          <h1 className="text-2xl text-gray-800 mb-5 font-semibold">Admin News Items</h1>
          <table className="w-full border-2 border-gray-500 p-10">
            <thead className="w-full">
              <tr className="w-full">
                <th className="border-2 border-gray-500 p-2">Id</th>
                <th className="border-2 border-gray-500 p-2">Title</th>
                <th className="border-2 border-gray-500 p-2">Posted on</th>
                <th className="border-2 border-gray-500 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsItems.map((item) => (
                <tr key={item._id}>
                  <td className="border-2 border-gray-500 p-2">{item._id}</td>
                  <td className="border-2 border-gray-500 p-2">{item.title}</td>
                  <td className="border-2 border-gray-500 p-2">{item.createdAt.slice(0, 10)}</td>
                  <td className="border-2 border-gray-500 p-2 items-center">
                    <div className="flex justify-end space-x-5 pr-5 mt-5">
                      <button
                        className="px-5 py-1 bg-red-700 text-sm text-white"
                        onClick={() => deleteItem(item._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="px-5 py-1 bg-green-500 text-sm text-white"
                        onClick={() => navigate(`/newsdesc/${item._id}`)}
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
}

export default AdminNewsItems;
