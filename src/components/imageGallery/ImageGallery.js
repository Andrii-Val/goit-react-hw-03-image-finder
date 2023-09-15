import { List, ImageItem } from './ImageGallery.styled';
import { GalleryItem } from 'components/imageGalleryItem/GalleryItem';


export const ImageGallery = ({ imageList }) => {
    return (
        <List className="gallery">
            {imageList.map(photo => (
                <ImageItem key={photo.id}>
                    <GalleryItem item={photo} />
                </ImageItem>
            ))}
        </List>
    );
};