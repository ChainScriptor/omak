import { Circle } from '@phosphor-icons/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const items = [
    {
        title: 'Ferrari',
        description:
            'Αγαπητά μέλη της Εθελοντικής Ομάδας Αντιμετώπισης Κινδύνων(ΟΜ.Α.Κ.), Ευχαριστούμε θερμά για την εξαιρετική παρουσίαση του σεμιναρίου πρώτων βοηθειών στο χώρο μας, την Τετάρτη, 20 Νοεμβρίου 2019. Ευχόμαστε πάντα να έχετε το κουράγιο και τη δύναμη, ώστε να απλόχερα να προσφέρετε το εξαιρετικό κοινωνικό σας έργο. Με εκτίμηση, Το Δ.Σ.του Συλλόγου Γυναικών Καλαμαριάς.',
        image: '/src/assets/aids/1.jpg',
    },
    {
        title: 'Lamborghini',
        description:
            'Com design audacioso, a Lamborghini proporciona uma combinação inigualável de adrenalina e elegância.',
        image: '/src/assets/aids/2.jpg',
    },
    {
        title: 'MC Laren',
        description:
            'Nascida da Fórmula 1, a McLaren é a quintessência da precisão britânica e inovação aerodinâmica.',
        image: '/src/assets/aids/3.jpg',
    },
    {
        title: 'hello',
        description:
            'Nascida da Fórmula 1, a McLaren é a quintessência da precisão britânica e inovação aerodinâmica.',
        image: '/src/assets/aids/4.jpg',
    },
    {
        title: 'MC',
        description:
            'Nascida da Fórmula 1, a McLaren é a quintessência da precisão britânica e inovação aerodinâmica.',
        image: '/src/assets/aids/5.jpg',
    },
];

function App() {
    const [currentItem, setCurrentItem] = useState(0);
    const snapRef = useRef(null);

    const handleItemChange = useCallback(() => {
        const sizeContainer = snapRef.current?.scrollWidth ?? 0;
        const sizeItem = sizeContainer / items.length;

        if (currentItem >= items.length - 1) {
            snapRef.current?.scrollBy({ left: -sizeContainer, behavior: 'smooth' });
            setCurrentItem(0);
        } else {
            snapRef.current?.scrollBy({ left: sizeItem, behavior: 'smooth' });
            setCurrentItem((prevItem) => prevItem + 1);
        }
    }, [currentItem]);

    useEffect(() => {
        const interval = setInterval(handleItemChange, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [currentItem]);

    return (
        <main data-aos="fade-up" className="min-h-screen flex flex-col items-center justify-center space-x-4">
            {/* Title */}
            <div className="flex space-x-4 justify-center mt-10">
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    className="mb-36 card space-y-3 sm:space-y-4 p-4 w-1/2 hidden lg:block"
                >
                    <h1 className="section-title text-2xl">Α'Βοήθειες</h1>
                    <motion.img
                        src="/src/assets/brands/firstAid.svg"
                        width={300}
                        height={300}
                        className=""
                        animate={{
                            translateY: [-30, 30],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'mirror',
                            duration: 10,
                        }}
                    ></motion.img>
                </div>

                <p
                    data-aos="fade-up"
                    className="flex justify-center text-center section-description ml-5 mr-5 mt-14 mb-36 lg:ml-20 lg:mr-20 w-1/2"
                >
                    Πιστοποιημένοι Εκπαιδευτές της ομάδας μας από το Ευρωπαϊκό Συμβούλιο Αναζωογόνησης, σε στενή συνεργασία
                    με τους εθελοντικούς οργανισμούς Επείγουσας Προνοσοκομειακής Φροντίδας και Kids Save Lives, παρέχουν
                    ανιδιοτελώς πολύτιμη γνώση και εκπαίδευση σε ενήλικες και παιδιά σε ζητήματα βασικής υποστήριξης ζωής,
                    αντιμετώπισης τραύματος, αιμορραγίας, και γενικότερα παροχής α' βοηθειών. Το εκπαιδευτικό δυναμικό της
                    οργάνωσης, με 15 πιστοποιημένους εκπαιδευτές και επικεφαλής το επίτιμο μέλος μας ιατρό πνευμονολόγο-
                    εντατικολόγο κ. Ευάγγελο Καϊμακάμη, μεταλαμπάδευσε τις γνώσεις του στις α' βοήθειες ανταποκρινόμενο σε
                    σχετικά αιτήματα συνδημοτών μας. Φορείς όπως ο Σύλλογος Γονέων και Κηδεμόνων του 7ου Γυμνασίου
                    Καλαμαριάς, το Erasmus Student Network, ο Σύλλογος Γυναικών Ελλάδος, τα Ιδιωτικά Εκπαιδευτήρια
                    Ανδρεάδη, έγιναν αποδέκτες γνώσεων α΄ βοηθειών σε ζητήματα βασικής υποστήριξης ζωής, αντιμετώπισης
                    τραύματος και αιμορραγίας κ.λπ.
                </p>
            </div>

            {/* Carousel */}
            <div className="w-3/4 sm:w-1/2 drop-shadow-lg" data-aos="fade-up" data-aos-delay="100">
                {/* Indicator */}
                <div className="absolute flex gap-2 backdrop-blur-sm bottom-10 z-10 left-1/2 transform -translate-x-1/2 bg-white/30 p-2 rounded-full">
                    {items.map((item, index) =>
                        currentItem === index ? (
                            <Circle key={`${item.title}-${index}`} size={10} color="#222222" weight="fill" />
                        ) : (
                            <Circle key={`${item.title}-${index}`} size={10} color="#222222" weight="regular" />
                        )
                    )}
                </div>

                {/* Snap Container */}
                <div ref={snapRef} className="snap-x snap-mandatory flex overflow-x-hidden relative rounded-2xl">
                    {items.map((item, index) => (
                        <div
                            key={`${item.title}-${index}`} // Χρήση τίτλου και index για μοναδικό key
                            className="snap-center flex justify-center min-w-full gap-2 bg-cover bg-center bg-no-repeat rounded-2xl p-3"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                height: '400px',
                            }}
                        >
                            <div className="w-full backdrop-blur-sm bg-white/50 h-fit px-5 py-2 rounded-lg">
                                <p className="text-gray-900 text-lg font-bold">{item.title}</p>
                                <p className="text-gray-900 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default App;
