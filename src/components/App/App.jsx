
import { Component } from 'react';
import { fetchImages } from 'constants/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Modal } from 'components/Modal/Modal';
import { Wrapper } from './App.styled';
export class App extends Component {
  state = {
    searchQuery: '',
    items: [],
    page: 1,
    totalPages: null,
    perPage: 12,
    selectedImageUrl: null,
    isSelected: false
  };
  onSubmit = async e => {
    e.preventDefault();

    const { page, perPage} = this.state;
    const {
      search: { value: searchQuery },
    } = e.target.elements;
    try {
      const response = await fetchImages(searchQuery, page, perPage);
      const {
        data: { hits: items, totalHits },
      } = response;
      console.log(items);
      const totalPages = Math.ceil(totalHits / perPage);

      this.setState(prevState => {
        return { searchQuery, page: prevState.page + 1, items, totalPages };
      });
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };
  onLoadMore = async () => {
    const { page, perPage, searchQuery } = this.state;
    try {
      const response = await fetchImages(searchQuery, page, perPage);
      const {
        data: { hits: items},
      } = response;
      this.setState(prevState => {
        return { page: prevState.page + 1, items: [...prevState.items, ...items] };
      });

    } catch (error) {
      console.log(error);
    }
  }
onImageClick = (e) => {
  const {key} = e.currentTarget;
  const {items} = this.state;
  const obj = [...items].filter(item => item.id === key);
  const selectedImageUrl = obj.largeImageURL;

  this.setState({selectedImageUrl, isSelected: true});
}


  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ page: 0 });
    }
  }

  render() {
    const { items, selectedImageUrl, page, totalPages, isSelected, onImageClick } = this.state;
    const {onLoadMore, onSubmit} = this;
    return (
      <Wrapper>
      <Searchbar onSubmit={onSubmit}/>
        <ImageGallery images={items} onClick={onImageClick}></ImageGallery>
        {page >= 1 && page < totalPages && <Button onClick={onLoadMore}/>}
        {isSelected && <Modal url={selectedImageUrl}/>}
      </Wrapper>
    );
  }
}
