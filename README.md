# Tone-Poem App

ECE 366 Spring 2022 -- Anna Konvicka, Lucia Rhode, Jiyoon Pyo, Seyun Kim

This application will allow users to label audio samples based on the mood/feeling evoked by the audio. The goal of the project is to create a classified database of sounds with abstract labels which can be used in further machine learning applications.

## To download audio data##
Git clone the following [git repository](https://github.com/mdeff/fma)
<code>git clone https://github.com/mdeff/fma.git
<code>cd fma/data

Download the data you want
<code>
curl -O https://os.unil.cloud.switch.ch/fma/fma_metadata.zip
curl -O https://os.unil.cloud.switch.ch/fma/fma_small.zip
curl -O https://os.unil.cloud.switch.ch/fma/fma_medium.zip
curl -O https://os.unil.cloud.switch.ch/fma/fma_large.zip
curl -O https://os.unil.cloud.switch.ch/fma/fma_full.zip

echo "f0df49ffe5f2a6008d7dc83c6915b31835dfe733  fma_metadata.zip" | sha1sum -c -
echo "ade154f733639d52e35e32f5593efe5be76c6d70  fma_small.zip"    | sha1sum -c -
echo "c67b69ea232021025fca9231fc1c7c1a063ab50b  fma_medium.zip"   | sha1sum -c -
echo "497109f4dd721066b5ce5e5f250ec604dc78939e  fma_large.zip"    | sha1sum -c -
echo "0f0ace23fbe9ba30ecb7e95f763e435ea802b8ab  fma_full.zip"     | sha1sum -c -

unzip fma_metadata.zip
unzip fma_small.zip
unzip fma_medium.zip
unzip fma_large.zip
unzip fma_full.zip

cd ..

For the demo page, we used *fma_small.zip*


Thank you [source](https://github.com/mdeff/fma) for the code and dataset.
