import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import SeTextField from '../castom-text-field/castom-text-field';


const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth:theme.breakpoints.width('md'),
    },
  }));

export default function RuleHeader(props) {
    const classes = useStyles();
    const { formik } = props
    return (
        <React.Fragment>
            <div className={classes.container}>
            <Grid container spacing={5}>
                <Grid item container xs={5} spacing={5}>
                    <Grid item xs={12}>
                        <SeTextField
                            fullWidth
                            required
                            id="nameRule"
                            name="nameRule"
                            value={formik.values.nameRule}
                            onChange={formik.handleChange}
                            label="Наименование правила"
                            placeholder="Введите наименование правила"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SeTextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            id="numDocument"
                            name="numDocument"
                            value={formik.values.numDocument}
                            onChange={formik.handleChange}
                            label="Номер документа"
                            placeholder="Введите номер документа"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={5}>
                    <Grid item xs={12}>
                        <SeTextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            id="fromDocument"
                            name="fromDocument"
                            value={formik.values.fromDocument}
                            onChange={formik.handleChange}
                            label="От кого приходит документ"
                            placeholder="Скопируйте Фамилию И.О. и описание из ЭДО"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SeTextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            id="toWhomDocument"
                            name="toWhomDocument"
                            value={formik.values.toWhomDocument}
                            onChange={formik.handleChange}
                            label="На кого пришел документ"
                            placeholder="Скопируйте Фамилию И.О. и описание из ЭДО"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SeTextField
                            variant="outlined"
                            fullWidth
                            id="summary"
                            name="summary"
                            value={formik.values.summary}
                            onChange={formik.handleChange}
                            label="Ключевые слова в поле “Краткое содержание”"
                            placeholder="Введите ключевые слова"
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <FormHelperText>В качестве разделителя между словами и словосочетаниями используйте *<br/>
                            Если вы хотите учесть несколько слов, у которых изменяется только часть, замените изменяемую часть на *.<br/>
                            Например, вместо “градостроительной, градостроительная” напишите “градостроительн*” (через звездочку)<br/>
                        </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <SeTextField
                            variant="outlined"
                            fullWidth
                            id="documentPages"
                            name="documentPages"
                            value={formik.values.documentPages}
                            onChange={formik.handleChange}
                            label="Ключевые слова в поле “Страницы документа” (в файле)"
                            placeholder="Введите ключевые слова"
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <FormHelperText>Вместо пробела используйте * <br/>
                            Если вы хотите учесть несколько слов, у которых изменяется только часть, замените изменяемую часть на *.<br/>
                            Например, вместо “градостроительной, градостроительная” напишите “градостроительн*” (через звездочку) <br/>
                        </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <SeTextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            id="authorResolution"
                            name="authorResolution"
                            value={formik.values.authorResolution}
                            onChange={formik.handleChange}
                            label="Автор резолюции"
                            placeholder="Скопируйте Фамилию И.О. и описание из ЭДО"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SeTextField
                            variant="outlined"
                            fullWidth
                            id="keyWordResolution"
                            name="keyWordResolution"
                            value={formik.values.keyWordResolution}
                            onChange={formik.handleChange}
                            label="Ключевые слова в резолюции"
                            placeholder="Введите ключевые слова"
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            </div>
        </React.Fragment>
    );
}