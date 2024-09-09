import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


// material-ui
import { Grid, Button, Divider, TextField, Input } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Description } from "@mui/icons-material";

/* 새 상품 정보 입력 시 기본 값 */
const validationSchema = Yup.object().shape({
    productName: Yup.string().required("상품명을 입력하세요."),
    productInfo: Yup.string().required("상품 정보를 입력하세요."),
    allergyInfo: Yup.string().required("알레르기 정보를 입력하세요."),
    image: Yup.mixed().required("이미지를 업로드하세요."),
  });

function DetailPageSeller() {
    const theme = useTheme();
    const [imagePreview, setImagePreview] = useState(null);
    const location = useLocation();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
          setImage(reader.result);
        };
        
        if (file) {
          reader.readAsDataURL(file);
        }
      };

    const handleUpdate = async (values, {setErrors, setSubmittin}) => {

    }

    const handleDelete = (e) => {
        const url = ``
        /* fetch delete */

        if (window.confirm("정말로 이 상품을 삭제하시겠습니까?")) {
            try {

            } catch (error) {
                
            }
            
        }
    }

    return (
        <Formik
            initialValues={{
                /* TODO: 기존 상품 정보 대입 */
                name : "",
                description: null,
                price: "",
                calory: null,
                image: null,
                spicy: null,
                brand: null,
                weight: null,
                allergies: null,
            }}
            validationSchema={validationSchema}
            onSubmit={handleUpdate}
        >
            <Form>
                <Grid container spacing={2}
                    sx={{
                        padding: '24px 8rem 24px 8rem',
                        width: '100%',
                        // minWidth: '600px'
                    }}>
                    {/* 브랜드명 */}
                    <Grid item xs={12} sx={{marginBottom: 5}}>
                        <TextField
                            id="adornment-brand"
                            label="브랜드명"
                            variant="standard"
                            type="text"
                            sx={{marginBottom: 1}}
                            InputProps={{
                                disableUnderline: true, // 밑줄 제거
                            }}
                        />
                        <Divider />
                    </Grid>

                    {/* 좌측: 이미지 */}
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Input
                            type="file"
                            onChange={handleImageUpload}
                            disableUnderline
                        ></Input>
                    </Grid>
                
                    {/* 우측: 정보 */}
                    <Grid item xs={6}>
                        <TextField
                            id="adornment-burger-name"
                            label="버거이름"
                            variant="standard"
                            type="text"
                            sx={{width: '100%', marginBottom: 1}}
                            InputProps={{
                                disableUnderline: true, // 밑줄 제거
                            }}
                        />
                        <TextField
                            id="adornment-burger-description"
                            label="버거설명"
                            variant="standard"
                            type="text"
                            sx={{width: '100%', marginBottom: 1}}
                            InputProps={{
                                disableUnderline: true, // 밑줄 제거
                            }}
                        />

                        {/* 옵션 선택 (단품, 세트) */}
                        <Grid container spacing={2} sx={{ marginTop: 2, marginBottom: 4 }}>
                        <Grid item xs={6}>
                            <TextField
                                id="adornment-burger-single-price"
                                label="단품 가격"
                                variant="standard"
                                type="number"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            ></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="adornment-burger-set-price"
                                label="세트 가격"
                                variant="standard"
                                type="number"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            ></TextField>
                        </Grid>
                        </Grid>
                        <Divider sx={{ marginBottom: 2 }} />

                        {/* 알레르기 정보 */}
                        <TextField
                            id="adornment-burger-allergy"
                            label="알러지 정보"
                            variant="standard"
                            type="text"
                            sx={{width: "100%", marginBottom: 2}}
                            InputProps={{
                                disableUnderline: true,
                            }}
                        ></TextField>

                        {/* 칼로리 정보 */}
                        <TextField
                            id="adornment-burger-calories"
                            label="칼로리 정보"
                            variant="standard"
                            type="number"
                            sx={{width: "100%"}}
                            InputProps={{
                                disableUnderline: true,
                            }}
                        ></TextField>

                        {/* 새로 만들기 */}
                        <Grid container spacing={2} sx={{ marginTop: 2 }}>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant='contained'
                                    fullWidth
                                    sx={{...theme.components.MuiButton}}>
                                새 메뉴 추가하기
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    );
}

export default DetailPageSeller;
