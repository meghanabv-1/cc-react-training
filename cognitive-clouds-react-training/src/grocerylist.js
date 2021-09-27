import React, {useState} from 'react';
import './grocery.css'

const groceryList = [
    {
      "item": "Dal",
      "type": "veg"
    },
    {
      "item": "Fish",
      "type": "non-veg"
    },
    {
        "item": "Meat",
        "type": "non-veg"
    },
    {
      "item": "Rice",
      "type": "veg"
    }
  ];

function GroceryList (){
    const [grocery, setGrocery] = useState(groceryList)
    
      const sortGroceryAsc = () => {
          const sortedItems = [...grocery].sort((a,b) => {
            let fa = a.item.toLowerCase(),
            fb = b.item.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;        
        });
        setGrocery(sortedItems);
      }

      const sortGroceryDsc = () => {
        const sortedItems = [...grocery].sort((a,b) => {
          let fa = a.item.toLowerCase(),
          fb = b.item.toLowerCase();
          if (fb < fa) {
              return -1;
          }
          if (fb > fa) {
            return 1;
        }
          return 0;        
      });
      setGrocery(sortedItems);
    }
   
      return(
          <div>
              <div>
                  <button onClick={sortGroceryAsc}>Sort Asc</button>
                  <button onClick={sortGroceryDsc}>Sort Des</button>
              </div>
              <br />
              <table>
                  <thead>
                <tr>
                  <th>VEG</th>
                  <th>NON-VEG</th>
                </tr>
                </thead>
                <tbody>
                  
                      {grocery.map(obj => {
                          return (
                            <tr key={obj.item}>
                                <td>{obj.type === 'veg' ? obj.item : '-'}</td>
                                <td>{obj.type === 'non-veg' ? obj.item : '-'}</td>
                            </tr>
                          )
                      })}
                </tbody>
                 
              </table>
          </div>
      )

}

export default GroceryList ;