import { motion } from "framer-motion";
const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
const Transition = ({ children }) => {
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    );
};
export default Transition;