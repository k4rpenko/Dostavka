import Image from 'next/image';
import styles from './style.module.scss';

export default function Home5() {
    const brands = [
        { name: 'Nokia', logo: '/logo/company/nokia.svg' },
        { name: 'Apple', logo: '/logo/company/apple.svg' },
        { name: 'Samsung', logo: '/logo/company/samsung.svg' },
        { name: 'Toyota', logo: '/logo/company/toyota.svg' },
        { name: 'Philips', logo: '/logo/company/philips.svg' },
        { name: 'Huawei', logo: '/logo/company/huawei.svg' },
        { name: 'Canon', logo: '/logo/company/canon.svg' },
        { name: 'Suzuki', logo: '/logo/company/suzuki.svg' },
    ];

    return (
        <div className={styles.home5}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Empowering Businesses Worldwide, Shipping Wins for Our Clients
                </h1>
                <div className={styles.brandGrid}>
                    {brands.map((brand, index) => (
                        <div key={index} className={styles.brandLogo}>
                            {brand.logo.endsWith('.svg') ? (
                                <img 
                                    src={brand.logo} 
                                    alt={brand.name} 
                                    width={100} 
                                    height={50} 
                                    className={styles.grayFilter}
                                />
                            ) : (
                                <Image 
                                    src={brand.logo} 
                                    alt={brand.name} 
                                    width={100} 
                                    height={50} 
                                    className={styles.grayFilter}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.truckContainer}>
                    <Image 
                        src="/cars/Container Truck.svg" 
                        alt="Dostavka link"  
                        width={1000}
                        height={500}
                        layout="responsive"
                        className={styles.supplyLinkImage}
                    />
                    <Image
                        src="/logo/Logo-Dark.png"
                        alt="Dostavka Logo"
                        width={250}
                        height={200}
                        className={styles.logoOverlay}
                    />
                </div>
            </div>
        </div>
    );
}
