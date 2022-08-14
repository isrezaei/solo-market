import {RatingStar} from "rating-star";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {useGetLiveWidth} from "../../useGetLiveWidth";

export const InformationHeader = () =>
{
    const {productId} = useParams()
    const {product , id , rate , type , brand , price , offer} = useSelector(state => selectMasterDataById(state , productId))
    const priceWithOffer = parseInt((price - ((price * offer) / 100)))

    const {liveWidth} = useGetLiveWidth()

    return (
        <>
            <p className='
            text-gray-500 font-bold
            xs:text-lg xs:text-center xs:w-full
            lg:text-3xl lg:text-left lg:w-auto
            '>Buy {product}</p>


            <div className='h-24 text-gray-500 font-bold flex flex-col justify-center items-start gap-2'>
                <p className='
                xs:text-sm xs:text-center
                lg:text-lg lg:text-left
                '>Get $110–$700 off when you trade in an {product} or newer</p>
                <p className='
                text-sm text-blue-600
                xs:w-full xs:text-center
                lg:w-auto lg:text-left

                '>See how trade-in works</p>
            </div>

            <div className='
            flex items-center
            xs:w-full xs:justify-center xs:absolute xs:top-5 left-0
            lg:w-48 lg:h-11 lg:justify-start lg:relative lg:top-0
            '>
                <div className='flex justify-start items-center gap-1 text-gray-500 font-bold xs:hidden lg:flex'> <p className='text-2xl font-bold text-blue-600'>{rate}</p>/ 5</div>
                <RatingStar colors={{ mask: "rgba(52,96,243,0.87)" }} noBorder id={id.toString()} rating={rate} size={liveWidth > 500 ? 20 : 15}/>
            </div>

            <div className='
            xs:w-full xs:h-36 xs:grid xs:grid-cols-2 xs:justify-center xs:items-center xs:gap-3
            lg:w-auto lg:h-52 lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-0
            '>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-200 xs:rounded-full
                lg:h-auto lg:justify-start lg:gap-2  lg:bg-transparent lg:rounded-none
                '>
                    <p className='
                     text-gray-500 h-10 flex justify-start items-center font-bold
                     xs:text-sm
                     lg:text-lg
                     '>Category :</p> <p className='
                                        text-gray-600
                                        xs:text-sm
                                        lg:text-lg
                                        '>{type}</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-200 xs:rounded-full
                lg:h-auto lg:justify-start lg:gap-2  lg:bg-transparent lg:rounded-none
                '>
                    <p className='
                     text-gray-500 h-10 flex justify-start items-center font-bold
                     xs:text-sm
                     lg:text-lg
                     '>Brand :</p> <p className='
                                        text-gray-600
                                        xs:text-sm
                                        lg:text-lg
                                        '>{brand}</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-200 xs:rounded-full
                lg:h-auto lg:justify-start lg:gap-2  lg:bg-transparent lg:rounded-none
                '>
                    <p className='
                     text-gray-500 h-10 flex justify-start items-center font-bold
                     xs:text-sm
                     lg:text-lg
                     '>Price :</p> <p className='
                                        text-gray-600
                                        xs:text-sm
                                        lg:text-lg
                                        '>{price}</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-200 xs:rounded-full
                lg:h-auto lg:justify-start lg:gap-2  lg:bg-transparent lg:rounded-none
                '>
                    <p className='
                     text-gray-500 h-10 flex justify-start items-center font-bold
                     xs:text-sm
                     lg:text-lg
                     '>Offer :</p> <p className='
                                        text-gray-600
                                        xs:text-sm
                                        lg:text-lg
                                        '>{offer}%</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-200 xs:rounded-full  xs:col-span-2
                lg:h-auto lg:justify-start lg:gap-2  lg:bg-transparent lg:rounded-none
                '>
                    <p className='
                     text-gray-500 h-10 flex justify-start items-center font-bold
                     xs:text-sm
                     lg:text-lg
                     '>Price :</p> <p className='
                                        text-gray-600
                                        xs:text-sm
                                        lg:text-lg
                                        '>${priceWithOffer}</p>
                </span>
            </div>
        </>
    )
}