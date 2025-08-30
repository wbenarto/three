import React, { useMemo, useState } from 'react';
import Card from './Card';



const Pinterest = () => {
    console.log('Pinterest')

    const PINS = [
        {id: 1, title: "Pin 1", height: '300', img_url: 'http://placehold.it/150x300.jpg'},
        {id: 2, title: "Pin 2", height: '120', img_url: 'http://placehold.it/150x120.jpg'},
        {id: 3, title: "Pin 3", height: '600', img_url: 'http://placehold.it/150x600.jpg'},
        {id: 4, title: "Pin 4", height: '100', img_url: 'http://placehold.it/150x100.jpg'},
        {id: 5, title: "Pin 5", height: '360', img_url: 'http://placehold.it/150x360.jpg'},
        {id: 6, title: "Pin 6", height: '580', img_url: 'http://placehold.it/150x580.jpg'},
        {id: 7, title: "Pin 7", height: '140', img_url: 'http://placehold.it/150x140.jpg'},
        {id: 8, title: "Pin 8", height: '80', img_url: 'http://placehold.it/150x80.jpg'},
        {id: 9, title: "Pin 9", height: '240', img_url: 'http://placehold.it/150x240.jpg'},
        {id: 10, title: "Pin 10", height: '120', img_url: 'http://placehold.it/150x120.jpg'},
        {id: 11, title: "Pin 11", height: '600', img_url: 'http://placehold.it/150x600.jpg'},
        {id: 12, title: "Pin 12", height: '100', img_url: 'http://placehold.it/150x100.jpg'},
        {id: 13, title: "Pin 13", height: '360', img_url: 'http://placehold.it/150x360.jpg'},
        {id: 14, title: "Pin 14", height: '500', img_url: 'http://placehold.it/150x580.jpg'},
        {id: 15, title: "Pin 15", height: '140', img_url: 'http://placehold.it/150x140.jpg'},
        {id: 16, title: "Pin 16", height: '80', img_url: 'http://placehold.it/150x80.jpg'},
        {id: 17, title: "Pin 17", height: '240', img_url: 'http://placehold.it/150x240.jpg'},
        {id: 18, title: "Pin 18", height: '120', img_url: 'http://placehold.it/150x120.jpg'}
      ];
      const numColumns = 5
      const columns = useMemo(()=>{
        const cols = Array.from({length: numColumns}, ()=>({items:[], height: 0}))

        for (const pin of PINS) {
            let minHeight = Infinity;
            let minIndex = 0;

            for (let i=0;i<numColumns;i++) {
                if (cols[i].height < minHeight) {
                    minHeight = cols[i].height
                    minIndex = i
                }
            }
            cols[minIndex].items.push(pin)
            cols[minIndex].height += Number(pin.height)
        }

        return cols.map(e=>e.items)
      }, [PINS, numColumns])
   


  return (
  <div className='w-screen h-screen bg-blue-200 p-10'>
    <div className='flex gap-4 p-2 '>
        {columns.map((col,idx) => (
            <div className='flex flex-1 flex-col gap-4'>
                {col.map(e=> (
                    <Card {...e}/>
                ))}
            </div>    
        ))}
    </div>
  </div>)
};

export default Pinterest;