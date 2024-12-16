"use client";
import avatar from "/src/assets/website/avatar.svg";
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import React from 'react';

const supportersData = [
    {
        text: "Ευχαριστούμε θερμά την επιχείρηση ΕΞΑΝΤΑΣ-ΤΣΙΠΟΥΡΑΣ & ΣΙΑ Ο.Ε. (Ν. Πλαστήρα 101, Καλαμαριά) για την ευαισθησία και την κοινωνική συνείδηση που διαθέτει και εμπράκτως αποδεικνύει, διαθέτοντας ανιδιοτελώς  τα καύσιμα μετακίνησής μας, σε εκπαιδευτικές και επιχειρησιακές αποστολές της οργάνωσης.",
        img: avatar.src,
        name: "ΕΞΑΝΤΑΣ-ΤΣΙΠΟΥΡΑΣ & ΣΙΑ Ο.Ε.",

    },
    {
        text: "Ευχαριστούμε πολύ τον κ. Δημήτρη Χατζηιωάννου  για τη χορηγία δύο σάκων α' βοηθειών για εξοπλισμό των διασωστικών μας ποδηλάτων.",
        img: avatar.src,
        name: "κ. Δημήτρη Χατζηιωάννου",

    },
    {
        text: "Ευχαριστούμε πολύ τον κ. Καραμάρκο Αθανάσιο που ενίσχυσε οικονομικά την οργάνωσή μας με το ποσό των 50 ευρώ στη μνήμη του πατέρα του.",
        img: avatar.src,
        name: "κ. Καραμάρκο Αθανάσιο",

    },
    {
        text: "Ευχαριστούμε πολύ τις κυρίες Όλγα Κιβερτσικίδου και Ρίτα Τζοάνος που κατέθεσαν από 20 ευρώ στο ταμείο μας για την αγορά υγειονομικού υλικού.",
        img: avatar.src,
        name: "Όλγα Κιβερτσικίδου και Ρίτα Τζοάνος",

    },
    {
        text: "Ευχαριστούμε πολύ τον κύριο Νικόλαο Στεφανίδη για τη χορηγία δύο διασωστικών ποδηλάτων για εποχούμενη υγειονομική κάλυψη εντός του Δήμου μας.",
        img: avatar.src,
        name: "κύριο Νικόλαο Στεφανίδη",

    },
    {
        text: "Ευχαριστούμε την κυρία Ελένη Αηδονίδου για τη δωρεά ενός σετ αεροναρθήκων, ενισχύοντας το διαθέσιμο υγειονομικό υλικό μας.",
        img: avatar.src,
        name: "Ελένη Αηδονίδου",

    },
    {
        text: "Ευχαριστούμε πολύ Δημότη Καλαμαριάς που θέλησε να κρατήσει την ανωνυμία του και ο οποίος προσέφερε έναν φορητό υπολογιστή για τις εκπαιδευτικές μας ανάγκες.",
        img: avatar.src,
        name: "Ανώνυμος Δημότης Καλαμαριάς",

    },
    {
        text: "Ευχαριστούμε τον κύριο Δημήτριο Αναστασιάδη που ανέλαβε και διεκπεραίωσε ανιδιοτελώς τη διαδικασία αδειοδότησης  ραδιοσυχνοτήτων για την κάλυψη των ασυρματικών επικοινωνιών της οργάνωσης.",
        img: avatar.src,
        name: "Δημήτριο Αναστασιάδη",

    },
    {
        text: "Ευχαριστούμε τις ψηφιακές εκτυπώσεις print ZONE Εθνικής Αντιστάσεως 38 στην Καλαμαριά, για την εκτύπωση αφιλοκερδώς, ενημερωτικών φυλλαδίων της οργάνωσης μας.",
        img: avatar.src,
        name: "ψηφιακές εκτυπώσεις print ZONE",

    },
    {
        text: "Η εθελοντική μας οργάνωση οφείλει ένα μεγάλο ευχαριστώ στον Χρήστο Θωμαδάκη και στην εταιρεία του Α.Θωμαδάκης & ΣΙΑ Ε.Ε.(Πλατεία Αγίου Γεωργίου 7, Ροτόντα), που μας προσφέρει πάντα δωρεάν την αναπλήρωση των φιαλών μας σε οξυγόνο, αναγνωρίζοντας την ανιδιοτελή προσφορά μας στο κοινωνικό σύνολο.",
        img: avatar.src,
        name: "Α.Θωμαδάκης & ΣΙΑ Ε.Ε.",

    },
    {
        text: "Η ΟΜΑΚ ευχαριστεί τον κ. Αθανάσιο Σωτηράκη για την ανιδιοτελή προσφορά του, να φροντίσει για τον ελαιοχρωματισμό των χώρων εκπαίδευσης και αποθήκευσης του εξοπλισμού μας. ",
        img: avatar.src,
        name: "κ. Αθανάσιο Σωτηράκη",

    },
    {
        text: "Αισθανόμαστε την ανάγκη να ευχαριστήσουμε την κυρία Μυρσίνη-Διονυσία Καραμάρκου για την ενίσχυση της οργάνωσης με το ποσόν των 50 ευρώ στην μνήμη της θείας της Αναστασίας Κυριαζίδου.",
        img: avatar.src,
        name: "κυρία Μυρσίνη-Διονυσία Καραμάρκου",

    },
]
const firstColumn = supportersData.slice(0, 3);
const secondColumn = supportersData.slice(3, 6);
const thirdColumn = supportersData.slice(6, 9);

const SupportersColumn = ({ supportersData, className, duration }) => (
    <div className={className}>
        <motion.div animate={{
            translateY: "-50%",
        }}
            transition={{
                duration: duration || 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
            }}
            className="flex flex-col gap-2 pb-6 " >
            {[...new Array(2)].fill(0).map((_, index) => (
                <React.Fragment key={index}>
                    {supportersData.map(({ text, img, name }, index) => (
                        <div key={index} className="card">
                            <div>{text}</div>
                            <div className="flex items-center gap-2 mt-5">
                                <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-medium tracking-tight leading-5">{name}</div></div>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </motion.div >
    </div>
)


const Supporters = () => {
    return (
        <section className="py-0 " id="supporters">
            <div className="container max-h-[838px] overflow-hidden">
                <div className="section-heading">
                    <div className="flex justify-center">
                        <div className="tag">Υποστηρικτές</div>
                    </div>
                    <h2 className="section-title mt-5">Σας Ευχαριστούμε Πόλυ </h2>
                    <p className="section-description mt-5">Ένα μεγάλο ευχαριστώ από το Διοικητικό Συμβούλιο και από τα μέλη της οργάνωσης μας στον Δήμο Καλαμαριάς, ο οποίος μας παρέχει στέγη και καλύπτει τα λειτουργικά μας έξοδα, συνειδητοποιώντας την ανάγκη ύπαρξης και λειτουργίας ενός αμιγώς ανιδιοτελούς  ανθρωπιστικού φορέα προς όφελος της υγείας και της ασφάλειας των Δημοτών.</p>
                </div>
                <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] ">
                    <SupportersColumn supportersData={firstColumn} duration={15} />
                    <SupportersColumn supportersData={secondColumn} className="hidden md:block" duration={19} />
                    <SupportersColumn supportersData={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section >
    )
}

export default Supporters;