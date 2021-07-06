import React from 'react';
import { StyleSheet, View } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import Text from '~/components/Text';
import spacing from '~/theme/spacing';

const SingleContent = ({ text }) => {
  const formatText = isEmpty(text) ? '-' : text
  return (
    <Text h5 fontWeight='medium' color='secondaryDark' >
      {formatText}
    </Text>
  );
}

const MutipleContent = ({ datas }) => 
  datas.map(data => (
    <SingleContent text={data} />
  ));

const LabelText = ({ label, text, texts }) => {
  const content = isEmpty(texts)
  ? <SingleContent text={text} />
  : <MutipleContent datas={texts} />

  return (
    <View style={styles.labelContainer} >
      <Text h3 fontWeight='bold' color='primary'>
        {label}
      </Text>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: spacing.middle,
  },
});

export default LabelText;