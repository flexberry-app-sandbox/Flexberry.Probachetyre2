﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probachetyre
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Расчет заказа.
    /// </summary>
    // *** Start programmer edit section *** (РасчетЗаказа CustomAttributes)

    // *** End programmer edit section *** (РасчетЗаказа CustomAttributes)
    [AutoAltered()]
    [Caption("Расчет заказа")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РасчетЗаказаE", new string[] {
            "Номенклатура as \'Товар\'",
            "Номенклатура.Товар as \'Товар\'",
            "Номенклатура.Цена as \'Цена\'",
            "Количество as \'Количество\'",
            "Сумма as \'Сумма\'"}, Hidden=new string[] {
            "Номенклатура.Товар"})]
    [MasterViewDefineAttribute("РасчетЗаказаE", "Номенклатура", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Товар")]
    public class РасчетЗаказа : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private double fСумма;
        
        private IIS.Probachetyre.Номенклатура fНоменклатура;
        
        private IIS.Probachetyre.Заказ fЗаказ;
        
        // *** Start programmer edit section *** (РасчетЗаказа CustomMembers)

        // *** End programmer edit section *** (РасчетЗаказа CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (РасчетЗаказа.Количество CustomAttributes)

        // *** End programmer edit section *** (РасчетЗаказа.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (РасчетЗаказа.Количество Get start)

                // *** End programmer edit section *** (РасчетЗаказа.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (РасчетЗаказа.Количество Get end)

                // *** End programmer edit section *** (РасчетЗаказа.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетЗаказа.Количество Set start)

                // *** End programmer edit section *** (РасчетЗаказа.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (РасчетЗаказа.Количество Set end)

                // *** End programmer edit section *** (РасчетЗаказа.Количество Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (РасчетЗаказа.Сумма CustomAttributes)

        // *** End programmer edit section *** (РасчетЗаказа.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (РасчетЗаказа.Сумма Get start)

                // *** End programmer edit section *** (РасчетЗаказа.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (РасчетЗаказа.Сумма Get end)

                // *** End programmer edit section *** (РасчетЗаказа.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетЗаказа.Сумма Set start)

                // *** End programmer edit section *** (РасчетЗаказа.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (РасчетЗаказа.Сумма Set end)

                // *** End programmer edit section *** (РасчетЗаказа.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Расчет заказа.
        /// </summary>
        // *** Start programmer edit section *** (РасчетЗаказа.Номенклатура CustomAttributes)

        // *** End programmer edit section *** (РасчетЗаказа.Номенклатура CustomAttributes)
        [PropertyStorage(new string[] {
                "Номенклатура"})]
        [NotNull()]
        public virtual IIS.Probachetyre.Номенклатура Номенклатура
        {
            get
            {
                // *** Start programmer edit section *** (РасчетЗаказа.Номенклатура Get start)

                // *** End programmer edit section *** (РасчетЗаказа.Номенклатура Get start)
                IIS.Probachetyre.Номенклатура result = this.fНоменклатура;
                // *** Start programmer edit section *** (РасчетЗаказа.Номенклатура Get end)

                // *** End programmer edit section *** (РасчетЗаказа.Номенклатура Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетЗаказа.Номенклатура Set start)

                // *** End programmer edit section *** (РасчетЗаказа.Номенклатура Set start)
                this.fНоменклатура = value;
                // *** Start programmer edit section *** (РасчетЗаказа.Номенклатура Set end)

                // *** End programmer edit section *** (РасчетЗаказа.Номенклатура Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Probachetyre.Заказ.
        /// </summary>
        // *** Start programmer edit section *** (РасчетЗаказа.Заказ CustomAttributes)

        // *** End programmer edit section *** (РасчетЗаказа.Заказ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Заказ"})]
        public virtual IIS.Probachetyre.Заказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (РасчетЗаказа.Заказ Get start)

                // *** End programmer edit section *** (РасчетЗаказа.Заказ Get start)
                IIS.Probachetyre.Заказ result = this.fЗаказ;
                // *** Start programmer edit section *** (РасчетЗаказа.Заказ Get end)

                // *** End programmer edit section *** (РасчетЗаказа.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетЗаказа.Заказ Set start)

                // *** End programmer edit section *** (РасчетЗаказа.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (РасчетЗаказа.Заказ Set end)

                // *** End programmer edit section *** (РасчетЗаказа.Заказ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РасчетЗаказаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетЗаказаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетЗаказаE", typeof(IIS.Probachetyre.РасчетЗаказа));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of РасчетЗаказа.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfРасчетЗаказа CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfРасчетЗаказа CustomAttributes)
    public class DetailArrayOfРасчетЗаказа : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Probachetyre.DetailArrayOfРасчетЗаказа members)

        // *** End programmer edit section *** (IIS.Probachetyre.DetailArrayOfРасчетЗаказа members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type РасчетЗаказа by index.
        /// </summary>
        /// <summary>
        /// Adds object with type РасчетЗаказа.
        /// </summary>
        public DetailArrayOfРасчетЗаказа(IIS.Probachetyre.Заказ fЗаказ) : 
                base(typeof(РасчетЗаказа), ((ICSSoft.STORMNET.DataObject)(fЗаказ)))
        {
        }
        
        public IIS.Probachetyre.РасчетЗаказа this[int index]
        {
            get
            {
                return ((IIS.Probachetyre.РасчетЗаказа)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Probachetyre.РасчетЗаказа dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
