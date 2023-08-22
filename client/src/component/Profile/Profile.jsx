import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import './profile.css'
import axios from 'axios'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
function Profile() {
  const [post ,setPost] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
const [pageSize, setPageSize] = useState(10); 
const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken')
    const accessToken = localStorage.getItem('accessToken');
   axios.post('https://test-react.agiletech.vn/auth/refresh-token',{refreshToken:refreshToken},{
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
   })
   .then((res)=>{
   })
   .catch((err)=>{
    console.log(err)
   })
  }, [])
  
  //phantrang
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
  axios.get(`https://test-react.agiletech.vn/posts?page=${currentPage}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
    .then(response => {
      setPost(response.data.posts)
      setTotalPages(response.data.total_page)
    })
    .catch(error => {
      console.error(error);
    });
  }, [currentPage])
  
  ////delete

  function deletepost(id){
    console.log(id,'id')
    const accessToken = localStorage.getItem('accessToken');
    axios.delete(`https://test-react.agiletech.vn/posts/${id}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => {
        console.log(response)
        axios.get('https://test-react.agiletech.vn/posts?page=1', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })
          .then(response => {
            setPost(response.data.posts)
            console.log(response.data.posts)
          })
          .catch(error => {
            console.error(error);
          });
        
      })
      .catch(error => {
        console.error(error);
      });
  }
const [tag,setTag] = useState([])
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios.get('https://test-react.agiletech.vn/posts/tags', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
          .then(response => {
            setTag(response.data)
          })
          .catch(error => {
            console.error(error);
          });
  }, [])
  
  ////add post

  const [title,setTitle] = useState('')
  const [tagg,setTagg] = useState('')
  const [description,setDescription] =useState('')

  const addpost =()=>{
    if (!title || tagg.length === 0 || !description) {
      alert("Các trường không được để trống");
      return;
    }
    const previousTaggValues = [...tagg];
    const accessToken = localStorage.getItem('accessToken');
    axios.post('https://test-react.agiletech.vn/posts',{
      title: title,
      description: description,
      tags: tagg
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
          .then(response => {
         setTitle('')
         setDescription('')
         setTagg(previousTaggValues)
            axios.get('https://test-react.agiletech.vn/posts?page=1', {
              headers: {
                'Authorization': `Bearer ${accessToken}`
              }
            })
              .then(response => {
                setPost(response.data.posts)
                console.log(response.data.posts)
              })
              .catch(error => {
                console.error(error);
              });
          })
          .catch(error => {
            console.error(error);
          });
  }
   // edit post

   const [check ,setCheck] =useState(true)
  const editpost= (id)=>{
    localStorage.setItem('id',id)
   const valedit= post.filter(function(value,index){
      return value.id === id
    })
    setDescription(valedit[0].description)
    setTagg(valedit[0].tagg)
    setTitle(valedit[0].title)
    setCheck(false)
  }
const luu =()=>{
  const id =localStorage.getItem('id')
  const accessToken = localStorage.getItem('accessToken');
  axios.patch(`https://test-react.agiletech.vn/posts/${id}`,{
    title: title,
    description: description,
    tags: tagg
  }, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then((data)=>{
    setCheck(true)
    setTitle('')
    setDescription('')
    setTagg('')
    axios.get('https://test-react.agiletech.vn/posts?page=1', {
              headers: {
                'Authorization': `Bearer ${accessToken}`
              }
            })
              .then(response => {
                setPost(response.data.posts)
                console.log(response.data.posts)
              })
              .catch(error => {
                console.error(error);
              });
  })
  .catch((err)=>{
    console.log(err)
  })
}

const nav = useNavigate()
//phân trang

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages) {
    setCurrentPage(page);
  }
};

const logout = ()=>{
  const accessToken = localStorage.getItem('accessToken');
  axios.delete('https://test-react.agiletech.vn/auth/logout', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
    .then(response => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      nav('/login')
    })
    .catch(error => {
      console.error('Logout failed', error);
    });
}
  return (
    <Grid container className='profile'>
        <Grid item lg={2} sm={12} xs={12} className='profile_2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="35" viewBox="0 0 49 35" fill="none" className='profile_2_svg'>
         <rect y="15" width="20" height="20" rx="10" fill="#9C69E2"/>
        <rect x="29" width="20" height="35" rx="10" fill="#F063B8"/>
        </svg>
        <div className='profile2_menu'>
            <button>Post</button>
            <button onClick={()=>logout()}>LogOut</button>
        </div>
        </Grid>
        <Grid item lg={10} sm={12} xs={12} className='profile_tab'>
          <Grid container>
          <Grid item lg={4} sm={12} xs={12}>
            {check ? <button className='profile_button' onClick={()=>addpost()}>Add new</button>:
            <button className='profile_button' onClick={()=>luu()}>Lưu</button>
            }
                
            </Grid>
            <Grid item lg={8} sm={12} xs={12} position={'relative'} display={'flex'}>
            <TextField id="outlined-basic" label="title" variant="outlined" sx={{ width: '300px' }} required
             value={title}
             onChange={(event) => setTitle(event.target.value)}
            />
                <Autocomplete
                required
              multiple
              limitTags={2}
              id="multiple-limit-tags"
              options={tag}
              getOptionLabel={(option) => option}
              onChange={(event, newValue) => setTagg(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Tags" placeholder="tags" />
              )}
              sx={{ width: '300px' }}
              />
              <textarea placeholder='description' required className='textarea'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            ></textarea>
            </Grid>
          </Grid>
          <div>
          <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Tags</th>
                    <th scope="col" width={'90px'}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {post.map(function (value, index) {
                    return (
                      <tr key={value.id}>
                        <th scope="row">{index + 1}</th>
                        <td style={{ textAlign: 'center' }}>{value.title}</td>
                        <td>{value.description}</td>
                        <td style={{ textAlign: 'center' }}>{value.tags.join(' ,')}</td>
                        <td className='profile_table table_acction'>
                          <button className='profile_table-button' onClick={()=>editpost(value.id)}>
                            <img src='https://s3-alpha-sig.figma.com/img/3fa1/b6f9/01d592d1ecb4a2bb8f49388c661ab9e4?Expires=1693785600&Signature=FOidTEtyGU~cmKE22SSRgWkausAm0drC9DJz6nTgsyOHroSJTUDfzIG4D7~0I8c3K37gwyHRqAc7eYlYgskJvXnD98d~9fZTq9d~cS0V-4hW~HJMKY-EJ9HdojkCjHPuNBNXehQKPWNX3M-6KwhVW-vnCiE910lu-Vsaoh817oNPD674K--UykE3pbZuI53iej0F3vRbZCl25GH30jsyGlY~YNZ2TpzzFDrIpaka7znfhTND7Le1JVS7Z1sxOQJfDKLBPal62mfp8OIXIKa8kOusmpy3MxHXHkQ~dgbxthiYVKtKRydPPEpf1x6xX8lio068G2fLXzQnT1V5U3OjVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
                          </button>
                          <button className='profile_table-button' onClick={()=>deletepost(value.id)}>
                            <img src='https://s3-alpha-sig.figma.com/img/64e0/e27e/8ac619c8b42dea6058abc0fcca393b34?Expires=1693785600&Signature=QSUR0YgnVHt~tbVIUwt~cr~9lOW2fqHTc1QDfZ-EUevc9dLB2L4BvOnlVk5CtGhBMp-lq3WIwddOyVUSXqh2YhCxydRumyRwU-FDefQ6h93g6A4BDRxJ8e2sHs7oLL~VSXwe6GOVAZ8Z~~L8JtRKlq9L4xGWYARQiF2piKRJbZZSiTQ5MQpyWg1jKSbmHXytpA1o8D-1~nptYPEz0UH3n9rBlp~KqfON1j76DOHYUfYAuiRicd5g765XD~F0d4jdBihIBD51h2MrCn~MknBBO0DFLcq4Bwyc2Lq2uqc7zzRB6L8SOLC8SlMTwU5gyhVTDuFaJvHebg4rccNkwhj9SA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                
              </table>
               </div>
               <div className='phantrang'>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => goToPage(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
        </Grid>
    </Grid>
  )
}

export default Profile
