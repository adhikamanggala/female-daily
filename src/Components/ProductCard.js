import React, {useEffect, useState} from 'react';
import ImageProduct from '../Assets/product-exm.png';
import Photo from '../Assets/Arinda.jpeg';
import Rating from '@material-ui/lab/Rating'

function ProductCard(props) {

    const [value, setValue] = useState(Number);
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [productName, setProductName] = useState('');
    const [rating] = useState(3);
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');

    useEffect(() => {
        if(props && props.data){
            settingData();
        }
    });

    const settingData = () => {
        setName(props.data.editor_name);
        setRole(props.data.role);
        setProductName(props.data.product_name);
        setValue(props.data.rating);
        setDesc(props.data.desc);
        setImg(props.data.img);
    }
    return (
        <div>
            <div className={props.secondary === true ? "editor-profile-hide" : "editor-profile"}>
                <img src={Photo} alt="profile" className="profile-photo" />
                <div className="profile-name-container">
                    <p className="name-profile">{name}</p>
                    <p className="position">{role}</p>
                </div>
            </div>
            <div className={props.secondary === true ? "product-card-2" : "product-card"}>
                <div className="image-container">
                    {
                        props.secondary === true 
                        ? 
                        <img src={ImageProduct} alt="img-prod" className="image-product"/>
                        :
                        <img src={img} alt="img-prod" className="image-product"/>
                    }
                </div>
                <div className="info-container">
                    <p className={props.secondary === true ? "match-skin" : 'match-skin-hide'}>Match Skin Type</p>
                    <div className="rating-container">
                        <p className="rating">{props.secondary === true ? rating : value}</p>
                        <Rating 
                            name="read-only"
                            value={props.secondary === true ? rating : value} 
                            precision={0.1}
                            defaultValue={2.5}
                            size="small"
                            readOnly
                        />
                        <p className="rev">(7)</p>
                    </div>
                    <p className="product-name">{props.secondary === true ? 'Juno' : productName}</p>
                    <p className="product-desc">{props.secondary === true ? 'Glossy and soothing' : desc} </p>
                    <p className="product-desc">Rosy Beige</p>
                </div>
            </div>
        </div>
    )
}
export default ProductCard
