import React, { useState } from 'react'

import Image from 'next/image'
import { LOGO_URL } from '@/common/constants'

import {
    CartesianGrid,
    Line,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

type Props = {
    plotData?: any
}

const data01 = [
    { x: 100, y: 60 },
    { x: 120, y: 30 },
    { x: 170, y: 50 },
    { x: 140, y: 55 },
    { x: 150, y: 70 },
    { x: 110, y: 58 },
]

const TOGGLE_STATE = {
    ACTIVE_LOANS: 1,
    ACTIVE_OFFERS: 2,
}

const TIMEFRAMES = {
    H: '1H',
    D: '1D',
    W: '1W',
    M: '1M',
    Y: '1Y',
}

const ScatterGraph = (props: Props) => {
    const [toggle, setToggle] = useState(TOGGLE_STATE.ACTIVE_LOANS)
    const [timeFrame, setTimeFrame] = useState(TIMEFRAMES.D)

    return (
        <div className="w-full my-[42px] pr-6">
            <div className="border border-[#ECEFF3] p-6 rounded-lg">
                <div className="flex justify-between pb-[18px] border-b border-b-[#eceff3] mb-9">
                    <div className="rounded-md p-1 gap-2.5 border border-[#ECEFF366] bg-[#F8FAFB] flex">
                        <div
                            onClick={() => setToggle(TOGGLE_STATE.ACTIVE_LOANS)}
                            className={
                                toggle === TOGGLE_STATE.ACTIVE_LOANS
                                    ? 'bg-white px-4 py-2 rounded-md text-[#0D0D12]'
                                    : 'px-4 py-2 cursor-pointer text-[#818898]'
                            }
                            style={
                                toggle === TOGGLE_STATE.ACTIVE_LOANS
                                    ? {
                                          boxShadow:
                                              '0px 0px 0px 1px rgba(237, 237, 237, 0.08), 0px 1px 2px 0px rgba(164, 172, 185, 0.19)',
                                      }
                                    : {}
                            }
                        >
                            <p>Active Loans</p>
                        </div>
                        <div
                            onClick={() =>
                                setToggle(TOGGLE_STATE.ACTIVE_OFFERS)
                            }
                            className={
                                toggle === TOGGLE_STATE.ACTIVE_OFFERS
                                    ? 'bg-white px-4 py-2 rounded-md text-[#0D0D12]'
                                    : 'px-4 py-2 cursor-pointer text-[#818898]'
                            }
                            style={
                                toggle === TOGGLE_STATE.ACTIVE_OFFERS
                                    ? {
                                          boxShadow:
                                              '0px 0px 0px 1px rgba(237, 237, 237, 0.08), 0px 1px 2px 0px rgba(164, 172, 185, 0.19)',
                                      }
                                    : {}
                            }
                        >
                            <p>Active Offers</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[22px]">
                        <h4 className="text-[15px] font-semibold leading-5 text-[#A4ACB9]">
                            Duration:
                        </h4>
                        <h4
                            className="text-[15px] font-semibold leading-5 text-[#A4ACB9] cursor-pointer"
                            style={
                                timeFrame === TIMEFRAMES.H
                                    ? {
                                          padding: '6px 12px',
                                          background: '#F6F8FA',
                                          borderRadius: '100px',
                                      }
                                    : {}
                            }
                            onClick={() => setTimeFrame(TIMEFRAMES.H)}
                        >
                            1H
                        </h4>
                        <h4
                            className="text-[15px] font-semibold leading-5 text-[#A4ACB9] cursor-pointer"
                            style={
                                timeFrame === TIMEFRAMES.D
                                    ? {
                                          padding: '6px 12px',
                                          background: '#F6F8FA',
                                          borderRadius: '100px',
                                      }
                                    : {}
                            }
                            onClick={() => setTimeFrame(TIMEFRAMES.D)}
                        >
                            1D
                        </h4>
                        <h4
                            className="text-[15px] font-semibold leading-5 text-[#A4ACB9] cursor-pointer"
                            style={
                                timeFrame === TIMEFRAMES.W
                                    ? {
                                          padding: '6px 12px',
                                          background: '#F6F8FA',
                                          borderRadius: '100px',
                                      }
                                    : {}
                            }
                            onClick={() => setTimeFrame(TIMEFRAMES.W)}
                        >
                            1W
                        </h4>
                        <h4
                            className="text-[15px] font-semibold leading-5 text-[#A4ACB9] cursor-pointer"
                            style={
                                timeFrame === TIMEFRAMES.M
                                    ? {
                                          padding: '6px 12px',
                                          background: '#F6F8FA',
                                          borderRadius: '100px',
                                      }
                                    : {}
                            }
                            onClick={() => setTimeFrame(TIMEFRAMES.M)}
                        >
                            1M
                        </h4>
                        <h4
                            className="text-[15px] font-semibold leading-5 text-[#A4ACB9] cursor-pointer"
                            style={
                                timeFrame === TIMEFRAMES.Y
                                    ? {
                                          padding: '6px 12px',
                                          background: '#F6F8FA',
                                          borderRadius: '100px',
                                      }
                                    : {}
                            }
                            onClick={() => setTimeFrame(TIMEFRAMES.Y)}
                        >
                            1Y
                        </h4>
                    </div>
                </div>
                <div className="h-[350px] w-full">
                    <ScatterChart
                        width={1200}
                        height={380}
                        margin={{
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid color="#D3D6DF" strokeDasharray="3 3" />
                        <XAxis
                            type="number"
                            dataKey="x"
                            name="Loan Amount in BTC"
                        />
                        <YAxis
                            yAxisId="left"
                            type="number"
                            dataKey="y"
                            name="weight"
                            stroke="#8884d8"
                        />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter
                            yAxisId="left"
                            name="A school"
                            data={data01}
                            fill="black"
                        />
                    </ScatterChart>
                </div>
            </div>
        </div>
    )
}

export default ScatterGraph
