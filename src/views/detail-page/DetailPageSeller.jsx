import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


// material-ui
import { Grid, CardMedia, Typography, Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/* 기존 상품 정보 불러오기 */

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

    const handleUpdate = (values) => {
        alert("업데이트 완료!");
    }
    const handleDelete = () => {
        /* fetch delete */
        if (window.confirm("정말로 이 상품을 삭제하시겠습니까?")) {
            alert("상품이 삭제되었습니다.");
        }
    }

    return (
        <Formik
        initialValues={{
            /* 기존 상품 정보 대입 */
            productName: "",
            productInfo: "",
            allergyInfo: "",
            image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleUpdate(values)}
        >
            <Grid container spacing={2}
                sx={{
                    padding: '24px 8rem 24px 8rem',
                    width: '100%',
                    // minWidth: '600px'
                }}>
            {/* 브랜드명 */}
            <Grid item xs={12} sx={{marginBottom: 5}}>
                <Typography sx={theme.typography.h2} gutterBottom>
                브랜드 명
                </Typography>
                <Divider />
            </Grid>

            {/* 좌측: 이미지 */}
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <CardMedia
                component="img"
                image="/src/assets/images/menus/menu1.jpeg" // 실제 이미지 경로로 변경
                alt="버거 사진"
                sx={{ width: '20rem', height: '20rem' }}
                />
            </Grid>

            {/* 우측: 정보 */}
            <Grid item xs={6}>
                <Typography sx={theme.typography.h3} gutterBottom>
                이름
                </Typography>
                <Typography sx={theme.typography.menuCaption} gutterBottom>
                햄버거 설명
                </Typography>
                <Typography sx={theme.typography.subtitle1} gutterBottom>
                가격: 00,000원
                </Typography>

                {/* 옵션 선택 (단품, 세트) */}
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                <Grid item xs={6}>
                    <Button variant="outlined" fullWidth>
                    단품 00,000원
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" fullWidth>
                    세트 00,000원
                    </Button>
                </Grid>
                </Grid>

                {/* 알레르기 정보 */}
                <Typography  sx={{ marginTop: 5 }}>
                알레르기 정보
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />
                <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
                서버에서 받아온 알레르기 정보
                </Typography>

                {/* 장바구니 및 구매 버튼 */}
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                <Grid item xs={6}>
                    <Button
                        type="submit"
                        variant='contained'
                        fullWidth
                        sx={{...theme.components.MuiButton}}>
                    수정하기
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        type="button"
                        onClick={handleDelete}
                        variant='contained'
                        fullWidth
                        sx={{...theme.components.MuiButton}}>
                    삭제하기
                    </Button>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Formik>
    );
}

export default DetailPageSeller;
