-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.5.9


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema erpnextgeneration5
--

CREATE DATABASE IF NOT EXISTS erpnextgeneration5;
USE erpnextgeneration5;

--
-- Definition of table `accbalancesheet001hb`
--

DROP TABLE IF EXISTS `accbalancesheet001hb`;
CREATE TABLE `accbalancesheet001hb` (
  `absId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `periodicity` varchar(50) NOT NULL,
  `account` varchar(50) NOT NULL,
  `jan` decimal(12,4) DEFAULT NULL,
  `feb` decimal(12,4) DEFAULT NULL,
  `mar` decimal(12,4) DEFAULT NULL,
  `apr` decimal(12,4) DEFAULT NULL,
  `may` decimal(12,4) DEFAULT NULL,
  `jun` decimal(12,4) DEFAULT NULL,
  `jul` decimal(12,4) DEFAULT NULL,
  `aug` decimal(12,4) DEFAULT NULL,
  `sep` decimal(12,4) DEFAULT NULL,
  `oct` decimal(12,4) DEFAULT NULL,
  `nov` decimal(12,4) DEFAULT NULL,
  `dece` decimal(12,4) DEFAULT NULL,
  `startYear` year(4) NOT NULL,
  `endYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`absId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accbalancesheet001hb`
--

/*!40000 ALTER TABLE `accbalancesheet001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `accbalancesheet001hb` ENABLE KEYS */;


--
-- Definition of table `accbalancesheet001mb`
--

DROP TABLE IF EXISTS `accbalancesheet001mb`;
CREATE TABLE `accbalancesheet001mb` (
  `absId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `periodicity` varchar(50) NOT NULL,
  `account` varchar(50) NOT NULL,
  `jan` decimal(12,4) DEFAULT NULL,
  `feb` decimal(12,4) DEFAULT NULL,
  `mar` decimal(12,4) DEFAULT NULL,
  `apr` decimal(12,4) DEFAULT NULL,
  `may` decimal(12,4) DEFAULT NULL,
  `jun` decimal(12,4) DEFAULT NULL,
  `jul` decimal(12,4) DEFAULT NULL,
  `aug` decimal(12,4) DEFAULT NULL,
  `sep` decimal(12,4) DEFAULT NULL,
  `oct` decimal(12,4) DEFAULT NULL,
  `nov` decimal(12,4) DEFAULT NULL,
  `dece` decimal(12,4) DEFAULT NULL,
  `startYear` year(4) NOT NULL,
  `endYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`absId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accbalancesheet001mb`
--

/*!40000 ALTER TABLE `accbalancesheet001mb` DISABLE KEYS */;
INSERT INTO `accbalancesheet001mb` (`absId`,`company`,`periodicity`,`account`,`jan`,`feb`,`mar`,`apr`,`may`,`jun`,`jul`,`aug`,`sep`,`oct`,`nov`,`dece`,`startYear`,`endYear`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'wipro','Weekly','23','323.0000','434.0000','434.0000','533.0000','434.0000','231.0000','5343.0000','323.0000','433.0000','543.0000','331.0000','324.0000',2026,2026,'siva','2022-12-07 10:32:25',NULL,NULL);
/*!40000 ALTER TABLE `accbalancesheet001mb` ENABLE KEYS */;


--
-- Definition of table `acccashflow001hb`
--

DROP TABLE IF EXISTS `acccashflow001hb`;
CREATE TABLE `acccashflow001hb` (
  `acfId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `periodicity` varchar(50) NOT NULL,
  `account` varchar(50) NOT NULL,
  `jan` decimal(12,4) DEFAULT NULL,
  `feb` decimal(12,4) DEFAULT NULL,
  `mar` decimal(12,4) DEFAULT NULL,
  `apr` decimal(12,4) DEFAULT NULL,
  `may` decimal(12,4) DEFAULT NULL,
  `jun` decimal(12,4) DEFAULT NULL,
  `jul` decimal(12,4) DEFAULT NULL,
  `aug` decimal(12,4) DEFAULT NULL,
  `sep` decimal(12,4) DEFAULT NULL,
  `oct` decimal(12,4) DEFAULT NULL,
  `nov` decimal(12,4) DEFAULT NULL,
  `dece` decimal(12,4) DEFAULT NULL,
  `startYear` year(4) NOT NULL,
  `endYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`acfId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `acccashflow001hb`
--

/*!40000 ALTER TABLE `acccashflow001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `acccashflow001hb` ENABLE KEYS */;


--
-- Definition of table `acccashflow001mb`
--

DROP TABLE IF EXISTS `acccashflow001mb`;
CREATE TABLE `acccashflow001mb` (
  `acfId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `periodicity` varchar(50) NOT NULL,
  `account` varchar(50) NOT NULL,
  `jan` decimal(12,4) DEFAULT NULL,
  `feb` decimal(12,4) DEFAULT NULL,
  `mar` decimal(12,4) DEFAULT NULL,
  `apr` decimal(12,4) DEFAULT NULL,
  `may` decimal(12,4) DEFAULT NULL,
  `jun` decimal(12,4) DEFAULT NULL,
  `jul` decimal(12,4) DEFAULT NULL,
  `aug` decimal(12,4) DEFAULT NULL,
  `sep` decimal(12,4) DEFAULT NULL,
  `oct` decimal(12,4) DEFAULT NULL,
  `nov` decimal(12,4) DEFAULT NULL,
  `dece` decimal(12,4) DEFAULT NULL,
  `startYear` year(4) NOT NULL,
  `endYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`acfId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `acccashflow001mb`
--

/*!40000 ALTER TABLE `acccashflow001mb` DISABLE KEYS */;
INSERT INTO `acccashflow001mb` (`acfId`,`company`,`periodicity`,`account`,`jan`,`feb`,`mar`,`apr`,`may`,`jun`,`jul`,`aug`,`sep`,`oct`,`nov`,`dece`,`startYear`,`endYear`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (11,'NANDALALA','Half-Yearly','435453','12.0000','2.0000','3.0000','4.0000','4.0000','4.0000','5.0000','5.0000','9.0000','7.0000','5.0000','8.0000',2026,2035,'latha','2022-02-10 01:00:57','latha','2022-02-10 01:01:08');
/*!40000 ALTER TABLE `acccashflow001mb` ENABLE KEYS */;


--
-- Definition of table `accgenledge001hb`
--

DROP TABLE IF EXISTS `accgenledge001hb`;
CREATE TABLE `accgenledge001hb` (
  `accglId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `partyType` varchar(40) NOT NULL,
  `partyName` varchar(40) NOT NULL,
  `letterHead` varchar(40) NOT NULL,
  `accountName` varchar(60) NOT NULL,
  `debit` int(11) NOT NULL,
  `credit` int(11) NOT NULL,
  `voucherCode` varchar(50) NOT NULL,
  `voucherType` varchar(50) NOT NULL,
  `projectname` varchar(50) NOT NULL,
  `costCenter` varchar(40) NOT NULL,
  `againvcType` varchar(50) NOT NULL,
  `againvcName` varchar(60) NOT NULL,
  `fromDate` datetime NOT NULL,
  `toDate` datetime NOT NULL,
  `grpbyVoucher` char(1) DEFAULT NULL,
  `grobyAccount` char(1) DEFAULT NULL,
  `postingDate` datetime NOT NULL,
  `againstAmt` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`accglId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accgenledge001hb`
--

/*!40000 ALTER TABLE `accgenledge001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `accgenledge001hb` ENABLE KEYS */;


--
-- Definition of table `accgenledge001mb`
--

DROP TABLE IF EXISTS `accgenledge001mb`;
CREATE TABLE `accgenledge001mb` (
  `accglId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `partyType` varchar(40) NOT NULL,
  `partyName` varchar(40) NOT NULL,
  `letterHead` varchar(40) NOT NULL,
  `accountName` varchar(60) NOT NULL,
  `debit` int(11) NOT NULL,
  `credit` int(11) NOT NULL,
  `voucherCode` varchar(50) NOT NULL,
  `voucherType` varchar(50) NOT NULL,
  `projectname` varchar(50) NOT NULL,
  `costCenter` varchar(40) NOT NULL,
  `againvcType` varchar(50) NOT NULL,
  `againvcName` varchar(60) NOT NULL,
  `fromDate` datetime NOT NULL,
  `toDate` datetime NOT NULL,
  `grpbyVoucher` char(1) DEFAULT NULL,
  `grobyAccount` char(1) DEFAULT NULL,
  `postingDate` datetime NOT NULL,
  `againstAmt` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`accglId`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accgenledge001mb`
--

/*!40000 ALTER TABLE `accgenledge001mb` DISABLE KEYS */;
INSERT INTO `accgenledge001mb` (`accglId`,`company`,`partyType`,`partyName`,`letterHead`,`accountName`,`debit`,`credit`,`voucherCode`,`voucherType`,`projectname`,`costCenter`,`againvcType`,`againvcName`,`fromDate`,`toDate`,`grpbyVoucher`,`grobyAccount`,`postingDate`,`againstAmt`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (29,'NANDALALA','Supplier','Dummy2','Dummy3','Dummy1',4545,7575,'Dummy1','Delivery Note','Dummy2','44987','6464','545','2022-01-31 18:30:00','2022-02-14 18:30:00','1','1','2022-02-10 18:30:00',87214,'latha','2022-02-10 00:26:01','latha','2022-02-10 00:44:25'),
 (30,'NANDALALA','Supplier','Dummy1','Dummy2','Dummy3',4545,7575,'Dummy2','Purchase Receipt','Dummy2','44987','6464','545','2022-02-14 18:30:00','2022-02-06 18:30:00','1','1','2022-02-03 18:30:00',8721,'latha','2022-02-10 00:43:26',NULL,NULL),
 (31,'nadsad','Supplier','Dummy2','Dummy2','Dummy3',12323,354,'Dummy3','Purchase Receipt','Dummy3','4236','323','3131','2022-11-02 00:00:00','2022-11-02 00:00:00','1','1','2022-11-03 00:00:00',331,'siva','2022-11-21 13:31:29',NULL,NULL),
 (32,'gh','Customer','Dummy2','Dummy1','Dummy1',45,45,'Dummy2','Purchase Receipt','Dummy2','45','45','45','2022-12-01 00:00:00','2022-12-07 00:00:00','0','0','2022-12-07 00:00:00',45,'siva','2022-12-27 15:08:21',NULL,NULL);
/*!40000 ALTER TABLE `accgenledge001mb` ENABLE KEYS */;


--
-- Definition of table `accountchart001hb`
--

DROP TABLE IF EXISTS `accountchart001hb`;
CREATE TABLE `accountchart001hb` (
  `chartId` int(11) NOT NULL AUTO_INCREMENT,
  `chartName` varchar(100) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`chartId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountchart001hb`
--

/*!40000 ALTER TABLE `accountchart001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `accountchart001hb` ENABLE KEYS */;


--
-- Definition of table `accountchart001mb`
--

DROP TABLE IF EXISTS `accountchart001mb`;
CREATE TABLE `accountchart001mb` (
  `chartId` int(11) NOT NULL AUTO_INCREMENT,
  `chartName` varchar(100) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`chartId`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountchart001mb`
--

/*!40000 ALTER TABLE `accountchart001mb` DISABLE KEYS */;
INSERT INTO `accountchart001mb` (`chartId`,`chartName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (19,'5445','latha','2022-02-10 00:46:04','latha','2022-02-10 00:46:13');
/*!40000 ALTER TABLE `accountchart001mb` ENABLE KEYS */;


--
-- Definition of table `accountsetup001hb`
--

DROP TABLE IF EXISTS `accountsetup001hb`;
CREATE TABLE `accountsetup001hb` (
  `setId` int(11) NOT NULL AUTO_INCREMENT,
  `mkentryforstkMang` varchar(20) DEFAULT NULL,
  `accfrozenUpto` varchar(30) NOT NULL,
  `creditName` varchar(60) NOT NULL,
  `roleallowedtoFreeze` varchar(60) NOT NULL,
  `chksupinvoice` varchar(20) DEFAULT NULL,
  `mkpayviaJournal` varchar(20) DEFAULT NULL,
  `unlinkpayonCancel` varchar(20) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`setId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountsetup001hb`
--

/*!40000 ALTER TABLE `accountsetup001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `accountsetup001hb` ENABLE KEYS */;


--
-- Definition of table `accountsetup001mb`
--

DROP TABLE IF EXISTS `accountsetup001mb`;
CREATE TABLE `accountsetup001mb` (
  `setId` int(11) NOT NULL AUTO_INCREMENT,
  `mkentryforstkMang` varchar(20) DEFAULT NULL,
  `accfrozenUpto` varchar(30) NOT NULL,
  `creditName` varchar(60) NOT NULL,
  `roleallowedtoFreeze` varchar(60) NOT NULL,
  `chksupinvoice` varchar(20) DEFAULT NULL,
  `mkpayviaJournal` varchar(20) DEFAULT NULL,
  `unlinkpayonCancel` varchar(20) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`setId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountsetup001mb`
--

/*!40000 ALTER TABLE `accountsetup001mb` DISABLE KEYS */;
INSERT INTO `accountsetup001mb` (`setId`,`mkentryforstkMang`,`accfrozenUpto`,`creditName`,`roleallowedtoFreeze`,`chksupinvoice`,`mkpayviaJournal`,`unlinkpayonCancel`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'1','12/12/2015','Customer','Supplier','1','0','1','','0000-00-00 00:00:00',NULL,NULL),
 (2,'0','10/10/2015','Student','Leave Approver','1','1','1','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `accountsetup001mb` ENABLE KEYS */;


--
-- Definition of table `accountspayable001hb`
--

DROP TABLE IF EXISTS `accountspayable001hb`;
CREATE TABLE `accountspayable001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `supplier` varchar(45) NOT NULL,
  `suppliertype` varchar(45) NOT NULL,
  `vouchertype` varchar(45) NOT NULL,
  `vouchernumber` varchar(45) NOT NULL,
  `invoicedamount` int(10) unsigned NOT NULL,
  `paidamount` int(10) unsigned NOT NULL,
  `outstandingamount` int(10) unsigned NOT NULL,
  `age` int(10) unsigned NOT NULL,
  `uptothirty` int(10) unsigned NOT NULL,
  `uptosixty` int(10) unsigned NOT NULL,
  `uptoninety` int(10) unsigned NOT NULL,
  `ninetyabove` int(10) unsigned NOT NULL,
  `remarks` varchar(45) NOT NULL,
  `postingdate` datetime NOT NULL,
  `duedate` datetime NOT NULL,
  `billno` int(11) NOT NULL,
  `billdate` datetime NOT NULL,
  `currency` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountspayable001hb`
--

/*!40000 ALTER TABLE `accountspayable001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `accountspayable001hb` ENABLE KEYS */;


--
-- Definition of table `accountspayable001mb`
--

DROP TABLE IF EXISTS `accountspayable001mb`;
CREATE TABLE `accountspayable001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `supplier` varchar(45) NOT NULL,
  `suppliertype` varchar(45) NOT NULL,
  `vouchertype` varchar(45) NOT NULL,
  `vouchernumber` varchar(45) NOT NULL,
  `invoicedamount` int(10) unsigned NOT NULL,
  `paidamount` int(10) unsigned NOT NULL,
  `outstandingamount` int(10) unsigned NOT NULL,
  `age` int(10) unsigned NOT NULL,
  `uptothirty` int(10) unsigned NOT NULL,
  `uptosixty` int(10) unsigned NOT NULL,
  `uptoninety` int(10) unsigned NOT NULL,
  `ninetyabove` int(10) unsigned NOT NULL,
  `remarks` varchar(45) NOT NULL,
  `postingdate` datetime NOT NULL,
  `duedate` datetime NOT NULL,
  `billno` int(11) NOT NULL,
  `billdate` datetime NOT NULL,
  `currency` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountspayable001mb`
--

/*!40000 ALTER TABLE `accountspayable001mb` DISABLE KEYS */;
INSERT INTO `accountspayable001mb` (`id`,`supplier`,`suppliertype`,`vouchertype`,`vouchernumber`,`invoicedamount`,`paidamount`,`outstandingamount`,`age`,`uptothirty`,`uptosixty`,`uptoninety`,`ninetyabove`,`remarks`,`postingdate`,`duedate`,`billno`,`billdate`,`currency`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (35,'Eagle Hardware','Electrical','54564','545',1200,6000,2000,30,0,0,0,0,'10','2022-02-10 18:30:00','2022-02-24 18:30:00',2,'2022-02-13 18:30:00',132154,'latha','2022-02-09 23:52:35','latha','2022-02-09 23:52:47'),
 (36,'KSMerchandise','Hardware','65','545',5454,75665,656,54,54,43,54,97,'54','2022-10-11 00:00:00','2022-10-12 00:00:00',5453,'2022-10-17 00:00:00',5467,'siva','2022-10-28 13:29:03',NULL,NULL);
/*!40000 ALTER TABLE `accountspayable001mb` ENABLE KEYS */;


--
-- Definition of table `accountsreceivable001hb`
--

DROP TABLE IF EXISTS `accountsreceivable001hb`;
CREATE TABLE `accountsreceivable001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `customer` varchar(45) NOT NULL,
  `vouchertype` varchar(45) NOT NULL,
  `voucherno` varchar(45) NOT NULL,
  `invoicedamount` int(10) unsigned NOT NULL,
  `paidamount` int(10) unsigned NOT NULL,
  `outstandingamount` int(11) NOT NULL,
  `age` int(10) unsigned NOT NULL,
  `uptothirty` int(10) unsigned NOT NULL,
  `uptosixty` int(10) unsigned NOT NULL,
  `uptoninety` int(10) unsigned NOT NULL,
  `ninetyabove` int(10) unsigned NOT NULL,
  `territory` varchar(45) NOT NULL,
  `remarks` varchar(45) NOT NULL,
  `postingdate` datetime NOT NULL,
  `duedate` datetime NOT NULL,
  `currency` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountsreceivable001hb`
--

/*!40000 ALTER TABLE `accountsreceivable001hb` DISABLE KEYS */;
INSERT INTO `accountsreceivable001hb` (`id`,`customer`,`vouchertype`,`voucherno`,`invoicedamount`,`paidamount`,`outstandingamount`,`age`,`uptothirty`,`uptosixty`,`uptoninety`,`ninetyabove`,`territory`,`remarks`,`postingdate`,`duedate`,`currency`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (52,'Dummy1','54564','5',5454,6000,656,544,54,32,54,97,'tree','434','2022-11-04 00:00:00','2022-11-11 00:00:00',132154,'siva','2022-11-25 15:58:34',NULL,NULL);
/*!40000 ALTER TABLE `accountsreceivable001hb` ENABLE KEYS */;


--
-- Definition of table `accountsreceivable001mb`
--

DROP TABLE IF EXISTS `accountsreceivable001mb`;
CREATE TABLE `accountsreceivable001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `customer` varchar(45) NOT NULL,
  `vouchertype` varchar(45) NOT NULL,
  `voucherno` varchar(45) NOT NULL,
  `invoicedamount` int(10) unsigned NOT NULL,
  `paidamount` int(10) unsigned NOT NULL,
  `outstandingamount` int(11) NOT NULL,
  `age` int(10) unsigned NOT NULL,
  `uptothirty` int(10) unsigned NOT NULL,
  `uptosixty` int(10) unsigned NOT NULL,
  `uptoninety` int(10) unsigned NOT NULL,
  `ninetyabove` int(10) unsigned NOT NULL,
  `territory` varchar(45) NOT NULL,
  `remarks` varchar(45) NOT NULL,
  `postingdate` datetime NOT NULL,
  `duedate` datetime NOT NULL,
  `currency` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountsreceivable001mb`
--

/*!40000 ALTER TABLE `accountsreceivable001mb` DISABLE KEYS */;
INSERT INTO `accountsreceivable001mb` (`id`,`customer`,`vouchertype`,`voucherno`,`invoicedamount`,`paidamount`,`outstandingamount`,`age`,`uptothirty`,`uptosixty`,`uptoninety`,`ninetyabove`,`territory`,`remarks`,`postingdate`,`duedate`,`currency`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (49,'Dummy1','54564','5',1200,6000,2000,30,0,0,0,0,'SENDER','100','2022-02-09 00:00:00','2022-02-14 00:00:00',132154,'latha','2022-02-09 23:47:41','siva','2022-10-31 16:33:18'),
 (50,'Dummy1','434','4343',2242,322,545,24,33,43,43,96,'gdgd','6544','2022-10-05 00:00:00','2022-10-14 00:00:00',544,'siva','2022-10-20 15:35:13',NULL,NULL),
 (51,'Dummy2','434','7565',434,3232,4334,21,23,32,64,96,'tree','434','2022-10-10 00:00:00','2022-10-20 00:00:00',32,'siva','2022-10-28 13:25:44',NULL,NULL);
/*!40000 ALTER TABLE `accountsreceivable001mb` ENABLE KEYS */;


--
-- Definition of table `accprofitlossstatement001hb`
--

DROP TABLE IF EXISTS `accprofitlossstatement001hb`;
CREATE TABLE `accprofitlossstatement001hb` (
  `aplsId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) DEFAULT NULL,
  `periodicity` varchar(50) DEFAULT NULL,
  `account` varchar(50) DEFAULT NULL,
  `costcenter` varchar(50) DEFAULT NULL,
  `projectname` varchar(60) DEFAULT NULL,
  `jan` decimal(12,4) DEFAULT NULL,
  `feb` decimal(12,4) DEFAULT NULL,
  `mar` decimal(12,4) DEFAULT NULL,
  `apr` decimal(12,4) DEFAULT NULL,
  `may` decimal(12,4) DEFAULT NULL,
  `jun` decimal(12,4) DEFAULT NULL,
  `jul` decimal(12,4) DEFAULT NULL,
  `aug` decimal(12,4) DEFAULT NULL,
  `sep` decimal(12,4) DEFAULT NULL,
  `oct` decimal(12,4) DEFAULT NULL,
  `nov` decimal(12,4) DEFAULT NULL,
  `dece` decimal(12,4) DEFAULT NULL,
  `startYear` year(4) DEFAULT NULL,
  `endYear` year(4) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`aplsId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accprofitlossstatement001hb`
--

/*!40000 ALTER TABLE `accprofitlossstatement001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `accprofitlossstatement001hb` ENABLE KEYS */;


--
-- Definition of table `accprofitlossstatement001mb`
--

DROP TABLE IF EXISTS `accprofitlossstatement001mb`;
CREATE TABLE `accprofitlossstatement001mb` (
  `aplsId` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `periodicity` varchar(50) NOT NULL,
  `account` varchar(50) NOT NULL,
  `costcenter` varchar(50) NOT NULL,
  `projectname` varchar(60) NOT NULL,
  `jan` decimal(12,4) DEFAULT NULL,
  `feb` decimal(12,4) DEFAULT NULL,
  `mar` decimal(12,4) DEFAULT NULL,
  `apr` decimal(12,4) DEFAULT NULL,
  `may` decimal(12,4) DEFAULT NULL,
  `jun` decimal(12,4) DEFAULT NULL,
  `jul` decimal(12,4) DEFAULT NULL,
  `aug` decimal(12,4) DEFAULT NULL,
  `sep` decimal(12,4) DEFAULT NULL,
  `oct` decimal(12,4) DEFAULT NULL,
  `nov` decimal(12,4) DEFAULT NULL,
  `dece` decimal(12,4) DEFAULT NULL,
  `startYear` year(4) NOT NULL,
  `endYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`aplsId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accprofitlossstatement001mb`
--

/*!40000 ALTER TABLE `accprofitlossstatement001mb` DISABLE KEYS */;
INSERT INTO `accprofitlossstatement001mb` (`aplsId`,`company`,`periodicity`,`account`,`costcenter`,`projectname`,`jan`,`feb`,`mar`,`apr`,`may`,`jun`,`jul`,`aug`,`sep`,`oct`,`nov`,`dece`,`startYear`,`endYear`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (7,'NANDALALA','Daily','435453','4544','Dummy3','12.0000','2.0000','3.0000','4.0000','4.0000','4.0000','5.0000','4.0000','9.0000','6.0000','2.0000','5.0000',2022,2035,'latha','2022-02-10 01:01:48','latha','2022-02-10 01:02:20');
/*!40000 ALTER TABLE `accprofitlossstatement001mb` ENABLE KEYS */;


--
-- Definition of table `applanguagesetting001hb`
--

DROP TABLE IF EXISTS `applanguagesetting001hb`;
CREATE TABLE `applanguagesetting001hb` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applanguagesetting001hb`
--

/*!40000 ALTER TABLE `applanguagesetting001hb` DISABLE KEYS */;
INSERT INTO `applanguagesetting001hb` (`Id`,`name`,`description`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (7,'Telungu','language','y','aditi','2023-02-01 18:20:14',NULL,NULL),
 (10,'None','Null','n','kalaii','2023-02-01 18:28:18',NULL,NULL),
 (11,'none','lang','n','kalaii','2023-02-01 18:55:13',NULL,NULL),
 (12,'null','lang','n','kalaii','2023-02-01 18:55:23',NULL,NULL),
 (13,'Null','Lang','y','priya','2023-02-02 18:45:50',NULL,NULL);
/*!40000 ALTER TABLE `applanguagesetting001hb` ENABLE KEYS */;


--
-- Definition of table `applanguagesetting001mb`
--

DROP TABLE IF EXISTS `applanguagesetting001mb`;
CREATE TABLE `applanguagesetting001mb` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applanguagesetting001mb`
--

/*!40000 ALTER TABLE `applanguagesetting001mb` DISABLE KEYS */;
INSERT INTO `applanguagesetting001mb` (`Id`,`name`,`description`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,'Tamil','lang','y','aditi','2023-01-30 14:43:56','aditi','2023-01-31 09:57:47'),
 (5,'English','lang','y','aditi','2023-01-31 11:03:55',NULL,NULL),
 (6,'Hindi','language','y','aditi','2023-01-31 17:23:35',NULL,NULL),
 (8,'Kannada','language','y','aditi','2023-02-01 18:20:57',NULL,NULL),
 (9,'Malayalam','language','y','aditi','2023-02-01 18:21:17',NULL,NULL),
 (14,'Telugu','lang','y','priya','2023-02-03 17:50:08',NULL,NULL);
/*!40000 ALTER TABLE `applanguagesetting001mb` ENABLE KEYS */;


--
-- Definition of table `applicationlogosettings001hb`
--

DROP TABLE IF EXISTS `applicationlogosettings001hb`;
CREATE TABLE `applicationlogosettings001hb` (
  `registerid` int(11) NOT NULL AUTO_INCREMENT,
  `clientname` varchar(255) DEFAULT NULL,
  `clientdescription` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `data` longblob,
  `loginuser` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  `originalfilename` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`registerid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applicationlogosettings001hb`
--

/*!40000 ALTER TABLE `applicationlogosettings001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `applicationlogosettings001hb` ENABLE KEYS */;


--
-- Definition of table `applicationlogosettings001mb`
--

DROP TABLE IF EXISTS `applicationlogosettings001mb`;
CREATE TABLE `applicationlogosettings001mb` (
  `registerid` int(11) NOT NULL AUTO_INCREMENT,
  `clientname` varchar(255) DEFAULT NULL,
  `clientdescription` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `data` longblob,
  `loginuser` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  `originalfilename` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`registerid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applicationlogosettings001mb`
--

/*!40000 ALTER TABLE `applicationlogosettings001mb` DISABLE KEYS */;
INSERT INTO `applicationlogosettings001mb` (`registerid`,`clientname`,`clientdescription`,`category`,`filename`,`data`,`loginuser`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`,`originalfilename`) VALUES 
 (1,'gh','gh','','img.jpg',NULL,'sivakumar','sivakumar','2022-12-29 13:35:13',NULL,NULL,'1672301113916_img.jpg'),
 (2,'df','df','','img1.jpg',NULL,'sivakumar','sivakumar','2022-12-29 13:44:31',NULL,NULL,'1672301671864_img1.jpg'),
 (3,'gh','gh','','img.jpg',NULL,'sivakumar','sivakumar','2022-12-29 13:47:33',NULL,NULL,'1672301853983_img.jpg'),
 (4,'fg','fg','','kk.jpg',NULL,'sivakumar','sivakumar','2022-12-30 11:39:20',NULL,NULL,'1672380561762_kk.jpg'),
 (5,'df','df','','kk.jpg',NULL,'sivakumar','sivakumar','2022-12-30 11:43:49',NULL,NULL,'1672380829776_kk.jpg'),
 (6,'fg','fg','','img.jpg',NULL,'sivakumar','sivakumar','2022-12-30 18:46:07',NULL,NULL,'1672406167483_img.jpg'),
 (7,'gh','gh','','kk.jpg',NULL,'sivakumar','sivakumar','2022-12-30 19:11:09',NULL,NULL,'1672407669216_kk.jpg');
/*!40000 ALTER TABLE `applicationlogosettings001mb` ENABLE KEYS */;


--
-- Definition of table `applicationsetting001mb`
--

DROP TABLE IF EXISTS `applicationsetting001mb`;
CREATE TABLE `applicationsetting001mb` (
  `app_id` int(11) NOT NULL AUTO_INCREMENT,
  `property` varchar(250) DEFAULT NULL,
  `link` varchar(250) DEFAULT NULL,
  `login_user` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `insert_user` varchar(50) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(50) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`app_id`)
) ENGINE=InnoDB AUTO_INCREMENT=270 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applicationsetting001mb`
--

/*!40000 ALTER TABLE `applicationsetting001mb` DISABLE KEYS */;
INSERT INTO `applicationsetting001mb` (`app_id`,`property`,`link`,`login_user`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (267,'ProductionPlanningTool','./app-manufacturing/app-product-order-details/app-product-plan','siva','Y','siva','2022-12-29 15:45:01',NULL,NULL),
 (268,'ProductStockEntry','./app-manufacturing/app-product-order-details/app-product-stock','siva','Y','siva','2022-12-29 15:45:01',NULL,NULL),
 (269,'ProductTimeSheet','./app-manufacturing/app-product-order-details/app-product-timest','siva','Y','siva','2022-12-29 15:45:01',NULL,NULL);
/*!40000 ALTER TABLE `applicationsetting001mb` ENABLE KEYS */;


--
-- Definition of table `applicationsettings001mb`
--

DROP TABLE IF EXISTS `applicationsettings001mb`;
CREATE TABLE `applicationsettings001mb` (
  `primaryID` int(11) NOT NULL AUTO_INCREMENT,
  `menu` varchar(255) DEFAULT NULL,
  `menuGroup` varchar(255) DEFAULT NULL,
  `menuLevel` varchar(255) DEFAULT NULL,
  `menuLink` varchar(255) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`primaryID`)
) ENGINE=InnoDB AUTO_INCREMENT=328 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applicationsettings001mb`
--

/*!40000 ALTER TABLE `applicationsettings001mb` DISABLE KEYS */;
INSERT INTO `applicationsettings001mb` (`primaryID`,`menu`,`menuGroup`,`menuLevel`,`menuLink`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'Production',' Production Order','3','./app-manufacturing/app-product-order-details/app-prod-order','NO',NULL,NULL,NULL,NULL),
 (2,'Production','Product Planning Tool','3','./app-manufacturing/app-product-order-details/app-product-plan','NO',NULL,NULL,NULL,NULL),
 (3,'Production','ProductStock Entry','3','./app-manufacturing/app-product-order-details/app-product-stock','NO',NULL,NULL,NULL,NULL),
 (4,' Production','Product TimeSheet','3','./app-manufacturing/app-product-order-details/app-product-timest','NO',NULL,NULL,NULL,NULL),
 (5,'Bill of Materials','Bill of Materials','3','./app-manufacturing/app-bom-details/app-material','NO',NULL,NULL,NULL,NULL),
 (6,'Bill of Materials',' Item Status','3','./app-manufacturing/app-bom-details/app-item-status','NO',NULL,NULL,NULL,NULL),
 (7,'Bill of Materials','Work Station','3','./app-manufacturing/app-bom-details/app-work-station','NO',NULL,NULL,NULL,NULL),
 (8,'Bill of Materials','BOM Operation','3','./app-manufacturing/app-bom-details/app-operation','NO',NULL,NULL,NULL,NULL),
 (9,'Tools','Tools','3','./app-manufacturing/app-manu-tools/app-tools','NO',NULL,NULL,NULL,NULL),
 (10,'Setup','Manufacture Setup','3','./app-manufacturing/app-manu-setup/app-setup','NO',NULL,NULL,NULL,NULL),
 (11,'Reports','Open Production Order','3','./app-manufacturing/app-product-reportdetails/app-open-order','NO',NULL,NULL,NULL,NULL),
 (12,'Reports','Production Order in Progress','3','./app-manufacturing/app-product-reportdetails/app-progress-order','NO',NULL,NULL,NULL,NULL),
 (13,'Reports',' Completed Production Order','3','./app-manufacturing/app-product-reportdetails/app-complete-order','NO',NULL,NULL,NULL,NULL),
 (14,'Reports','BOM Type','3','./app-manufacturing/app-product-reportdetails/app-bom-type','NO',NULL,NULL,NULL,NULL),
 (15,'Reports','Issued Item','3','./app-manufacturing/app-product-reportdetails/app-issue-item','NO',NULL,NULL,NULL,NULL),
 (16,'Billing','Sales Invoice','3','./app-accounts/app-billing/app-accounts-receivable','NO',NULL,NULL,NULL,NULL),
 (17,'Sales Innovice','Account Receivable','3','./app-accounts/app-billing/app-accounts-receivable','NO',NULL,NULL,NULL,NULL),
 (18,'Sales Innovice','Accounts Receivable Sumary','3','./app-accounts/app-billing/app-accountsrec-summary','NO',NULL,NULL,NULL,NULL),
 (19,'Sales Innovice','Delivered Items to be be Billed','3','./app-accounts/app-billing/app-delivered-items','NO',NULL,NULL,NULL,NULL),
 (20,'Sales Innovice','Gross Profit','3','./app-accounts/app-billing/app-gross-profit','NO',NULL,NULL,NULL,NULL),
 (21,'Sales Innovice','Ordered Items to be Billed','3','./app-accounts/app-billing/app-order-bill','NO',NULL,NULL,NULL,NULL),
 (22,'Billing','Purchase Invoice','3','./app-accounts/app-billing/app-accounts-receivable','NO',NULL,NULL,NULL,NULL),
 (23,'Purchase Invoice','Accounts payable','3','./app-accounts/app-billing/app-accounts-payable','NO',NULL,NULL,NULL,NULL),
 (24,'Purchase Invoice','Accounts Payable Summary','3','./app-accounts/app-billing/app-accountspay-summary','NO',NULL,NULL,NULL,NULL),
 (25,'Purchase Invoice','Received Items to be Billed','3','./app-accounts/app-billing/app-itemwise-purchase','NO',NULL,NULL,NULL,NULL),
 (26,'Purchase Invoice','Item-Wise Purchase Register','3','./app-accounts/app-billing/app-purchase-order','NO',NULL,NULL,NULL,NULL),
 (27,'Purchase Invoice','Purchase Order Items to be Billed','3','./app-accounts/app-billing/app-purchase-order','NO',NULL,NULL,NULL,NULL),
 (28,'Billing','Payment Request','3','./app-accounts/app-billing/app-payment-request','NO',NULL,NULL,NULL,NULL),
 (29,'Billing','Payment Entry','3','./app-accounts/app-billing/app-payment-entry','NO',NULL,NULL,NULL,NULL),
 (30,'Billing','Items-Wise Purchase Register','3','./app-accounts/app-billing/app-itemwisepurchase','NO',NULL,NULL,NULL,NULL),
 (31,'Company and Accounts','General Ledger','3','./app-accounts/app-company-accounts/app-general-ledger','NO',NULL,NULL,NULL,NULL),
 (32,'Company and Accounts','Journal Entry','3','./app-accounts/app-company-accounts/app-journal-entry','NO',NULL,NULL,NULL,NULL),
 (33,'Company and Accounts','Chart of Accounts','3','./app-accounts/app-company-accounts/app-account-chart','NO',NULL,NULL,NULL,NULL),
 (34,'Company and Accounts','Company and Accounts','3','./app-accounts/app-company-accounts/app-com-account','NO',NULL,NULL,NULL,NULL),
 (35,'Masters','Asset','3','./app-accounts/app-master/app-asset','NO',NULL,NULL,NULL,NULL),
 (36,'Masters','Customer','3','./app-accounts/app-master/app-customer','NO',NULL,NULL,NULL,NULL),
 (37,'Masters','Supplier','3','./app-accounts/app-master/app-supplier','NO',NULL,NULL,NULL,NULL),
 (38,'Masters','Item','3','./app-accounts/app-master/app-item','NO',NULL,NULL,NULL,NULL),
 (39,'Accounting Statements','Trial Balance','3','./app-accounts/app-accounting-stmts/app-trial-balance','NO',NULL,NULL,NULL,NULL),
 (40,'Accounting Statements','Balance Sheet','3','./app-accounts/app-accounting-stmts/app-balance-sheet','NO',NULL,NULL,NULL,NULL),
 (41,'Accounting Statements','Cash Flow','3','./app-accounts/app-accounting-stmts/app-cash-flow','NO',NULL,NULL,NULL,NULL),
 (42,'Accounting Statements','Profit and Loss Statement','3','./app-accounts/app-accounting-stmts/app-profit-loss','NO',NULL,NULL,NULL,NULL),
 (43,'Banking Payments','Update Bank Transcation Dates','3','./app-accounts/app-banking-payments/app-update-bank','NO',NULL,NULL,NULL,NULL),
 (44,'Banking Payments','Match Payments with Invoices','3','./app-accounts/app-banking-payments/app-match-payments','NO',NULL,NULL,NULL,NULL),
 (45,'Banking Payments','Bank Reconciliation Statement','3','./app-accounts/app-banking-payments/app-bank-reconciliation','NO',NULL,NULL,NULL,NULL),
 (46,'Banking Payments','Bank Clearance Summary','3','./app-accounts/app-banking-payments/app-bank-clearance','NO',NULL,NULL,NULL,NULL),
 (47,'Taxes','Sales Taxes and Charges','3','./app-accounts/app-taxes/app-sales-taxes','NO',NULL,NULL,NULL,NULL),
 (48,'Taxes','Purchase Taxes and Charges','3','./app-accounts/app-taxes/app-purtax-changes','NO',NULL,NULL,NULL,NULL),
 (49,'Taxes','Tax Rule','3','./app-accounts/app-taxes/app-tax-rule','NO',NULL,NULL,NULL,NULL),
 (50,'Taxes','Sales Register','3','./app-accounts/app-taxes/app-sale-register','NO',NULL,NULL,NULL,NULL),
 (51,'Taxes','Purchase Register','3','./app-accounts/app-taxes/app-purchase-register','NO',NULL,NULL,NULL,NULL),
 (52,'Budget and Cost Center','CostCenter Chart','3','./app-accounts/app-budget-costcenter/app-costcenter','NO',NULL,NULL,NULL,NULL),
 (53,'Budget and Cost Center','Budget Account Type','3','./app-accounts/app-budget-costcenter/app-budget-account','NO',NULL,NULL,NULL,NULL),
 (54,'Budget and Cost Center','Budget','3','./app-accounts/app-budget-costcenter/app-budget','NO',NULL,NULL,NULL,NULL),
 (55,'Budget and Cost Center','Budget Monthly Distribution','3','./app-accounts/app-budget-costcenter/app-budget-monthdist','NO',NULL,NULL,NULL,NULL),
 (56,'Budget and Cost Center','Budget Variance Report','3','./app-accounts/app-budget-costcenter/app-budget-variancerep','NO',NULL,NULL,NULL,NULL),
 (57,'Tools','Period Closing Voucher','3','./app-accounts/app-acc-tools/app-periodclosing-voucher','NO',NULL,NULL,NULL,NULL),
 (58,'Tools',' Asset Movement','3','./app-accounts/app-acc-tools/app-asset-movement','NO',NULL,NULL,NULL,NULL),
 (59,'Tools','Cheque Print Template','3','./app-accounts/app-acc-tools/app-chequeprint-template','NO',NULL,NULL,NULL,NULL),
 (60,'Setup','Setup','3','./app-manufacturing/app-manu-setup/app-setup','NO',NULL,NULL,NULL,NULL),
 (61,'To Bill','Ordered Items To Be Billed','3','./app-accounts/app-to-bill/app-order-item','NO',NULL,NULL,NULL,NULL),
 (62,'To Bill','Delivered Items To Be Billed','3','./app-accounts/app-to-bill/app-deliver-item','NO',NULL,NULL,NULL,NULL),
 (63,'To Bill','Purchase Order Items To Be Billed','3','./app-accounts/app-to-bill/app-purchase-item','NO',NULL,NULL,NULL,NULL),
 (64,'To Bill','Received Items To Be Billed','3','./app-accounts/app-to-bill/app-receive-item','NO',NULL,NULL,NULL,NULL),
 (65,'Analytics','Gross profit','3','./app-accounts/app-analytics/app-gross-profit','NO',NULL,NULL,NULL,NULL),
 (66,'Analytics','Purchase Invoice','3','./app-accounts/app-analytics/app-purchase-invoice','NO',NULL,NULL,NULL,NULL),
 (67,'Analytics','Sales Invoice','3','./app-accounts/app-analytics/app-sales-invoice','NO',NULL,NULL,NULL,NULL),
 (68,'Purchasing','Purchase Material Request','3','./app-buying/app-purchase-details/app-prmat-req','NO',NULL,NULL,NULL,NULL),
 (69,'Purchasing','Purchase Quotation Request','3','./app-buying/app-purchase-details/app-prreq-quot','NO',NULL,NULL,NULL,NULL),
 (70,'Purchasing','Purchase Order','3','./app-buying/app-purchase-details/app-purchase-order','NO',NULL,NULL,NULL,NULL),
 (71,'Purchasing',' Supplier Quotation','3','./app-buying/app-purchase-details/app-supplier-quot','NO',NULL,NULL,NULL,NULL),
 (72,'Supplier','Supplier','3','./app-buying/app-supplier-details/app-buying-supplier','NO',NULL,NULL,NULL,NULL),
 (73,'Supplier','Type','3','./app-buying/app-supplier-details/app-supplier-type','NO',NULL,NULL,NULL,NULL),
 (74,'Supplier','Status','3','./app-buying/app-supplier-details/app-supplier-status','NO',NULL,NULL,NULL,NULL),
 (75,'Item and Pricing','Item Group','3','./app-buying/app-item-price-details/app-item-group','NO',NULL,NULL,NULL,NULL),
 (76,'Item and Pricing','Item Price','3','./app-buying/app-item-price-details/app-item-price','NO',NULL,NULL,NULL,NULL),
 (77,'Item and Pricing','Product Bundle','3','./app-buying/app-item-price-details/app-product-bundle','NO',NULL,NULL,NULL,NULL),
 (78,'Item and Pricing','Pricing Rule','3','./app-buying/app-item-price-details/app-pricing-rule','NO',NULL,NULL,NULL,NULL),
 (79,'Item and Pricing','Shipping Rule','3','./app-buying/app-item-price-details/app-shipping-rule','NO',NULL,NULL,NULL,NULL),
 (80,'Item and Pricing','Item','3','./app-buying/app-item-price-details/app-sales-item','NO',NULL,NULL,NULL,NULL),
 (81,'Analytics','PU Analytics','3','./app-buying/app-analytics/app-pu-analytics','NO',NULL,NULL,NULL,NULL),
 (82,'Analytics','Supplier Wise Analytics','3','./app-buying/app-analytics/app-supplier-wise-analytics','NO',NULL,NULL,NULL,NULL),
 (83,'Analytics','Order Trend','3','./app-buying/app-analytics/app-order-trend','NO',NULL,NULL,NULL,NULL),
 (84,'Other Reports','Item Request','3','./app-buying/app-buying-report-details/app-item-request','NO',NULL,NULL,NULL,NULL),
 (85,'Other Reports','Item Ordered','3','./app-buying/app-buying-report-details/app-item-ordered','NO',NULL,NULL,NULL,NULL),
 (86,'Other Reports','Material Request Supply Wise','3','./app-buying/app-buying-report-details/app-matreq-supwise','NO',NULL,NULL,NULL,NULL),
 (87,'Other Reports','Item-PUHistory','3','./app-buying/app-buying-report-details/app-item-puhistory','NO',NULL,NULL,NULL,NULL),
 (88,'Selling','Sales','3','./app-selling/app-salse/app-quot-trends','NO',NULL,NULL,NULL,NULL),
 (89,'Sales','Quotation Trends','3','./app-selling/app-salse/app-quot-trends','NO',NULL,NULL,NULL,NULL),
 (90,'Sales','Sales Order','3','./app-selling/app-salse/app-salse-order','NO',NULL,NULL,NULL,NULL),
 (91,'Customers','Customer group','3','./app-selling/app-customers/app-customer-group','NO',NULL,NULL,NULL,NULL),
 (92,'Customers','Customer','3','./app-selling/app-customers/app-customerr','NO',NULL,NULL,NULL,NULL),
 (93,'Customers','Contact','3','./app-selling/app-customers/app-contact','NO',NULL,NULL,NULL,NULL),
 (94,'Customers','Address','3','./app-selling/app-customers/app-address','NO',NULL,NULL,NULL,NULL),
 (95,'Item and Pricing','Item Group','3','./app-selling/app-item-price-details/app-item-group','NO',NULL,NULL,NULL,NULL),
 (96,'Item and Pricing','Item Price','3','./app-selling/app-item-price-details/app-item-price','NO',NULL,NULL,NULL,NULL),
 (97,'Item and Pricing','Product Bundle','3','./app-selling/app-item-price-details/app-product-bundle','NO',NULL,NULL,NULL,NULL),
 (98,'Item and Pricing','Pricing Rule','3','./app-selling/app-item-price-details/app-product-bundle','NO',NULL,NULL,NULL,NULL),
 (99,'Item and Pricing','Shipping Rule','3','./app-selling/app-item-price-details/app-shipping-rule','NO',NULL,NULL,NULL,NULL),
 (100,'Item and Pricing','Item','3','./app-selling/app-item-price-details/app-sales-item','NO',NULL,NULL,NULL,NULL),
 (101,'Sales Partners and Territory','Territory','3','./app-selling/app-salse-pat-terr/app-territory','NO',NULL,NULL,NULL,NULL),
 (102,'Sales Partners and Territory','Sales Partner','3','./app-selling/app-salse-pat-terr/app-salse-partner','NO',NULL,NULL,NULL,NULL),
 (103,'Sales Partners and Territory','Sales Person','3','./app-selling/app-salse-pat-terr/app-salse-person','NO',NULL,NULL,NULL,NULL),
 (104,'Sales Partners and Territory','Territory Target Variance Item','3','./app-selling/app-salse-pat-terr/app-territory-tar-var-itm-grp','NO',NULL,NULL,NULL,NULL),
 (105,'Sales Partners and Territory','Sales Person Target Variance Item','3','./app-selling/app-salse-pat-terr/app-salse-per-tar-var-itm-grp','NO',NULL,NULL,NULL,NULL),
 (106,'Analytics','Sales Analytics','3','./app-selling/app-analytics/app-sales-analytics','NO',NULL,NULL,NULL,NULL),
 (107,'Analytics','Sales Funnel','3','./app-selling/app-analytics/app-sales-funnel','NO',NULL,NULL,NULL,NULL),
 (108,'Analytics','Customer Acquisition and Loyalty','3','./app-selling/app-analytics/app-customer-acqustion-loyalty','NO',NULL,NULL,NULL,NULL),
 (109,'Analytics','Quotation Trends','3','./app-selling/app-analytics/app-quotation-trends','NO',NULL,NULL,NULL,NULL),
 (110,'Analytics','Sales Order Trends','3','./app-selling/app-analytics/app-sales-order-trends','NO',NULL,NULL,NULL,NULL),
 (111,'Other Reports','Reports for Selling','3','./app-selling/app-other-report/app-lead-detail','NO',NULL,NULL,NULL,NULL),
 (112,'Reports for Selling','Lead Details','3','./app-selling/app-other-report/app-lead-detail','NO',NULL,NULL,NULL,NULL),
 (113,'Reports for Selling','Customer Addressess And Contacts','3','./app-selling/app-other-report/app-customer-detail','NO',NULL,NULL,NULL,NULL),
 (114,'Reports for Selling','Ordered items To Be Delivered','3','./app-selling/app-other-report/app-order-item-billed','NO',NULL,NULL,NULL,NULL),
 (115,'Reports for Selling','Sales Person-Wise Transaction Summary','3','./app-selling/app-other-report/app-sales-person','NO',NULL,NULL,NULL,NULL),
 (116,'Reports for Selling','Item-Wise Sales History','3','./app-selling/app-other-report/app-item-wise','NO',NULL,NULL,NULL,NULL),
 (117,'Reports for Selling','BOM Search','3','./app-selling/app-other-report/app-bill-of-material','NO',NULL,NULL,NULL,NULL),
 (118,'Reports for Selling','Inactive Customers','3','./app-selling/app-other-report/app-inactive-customer','NO',NULL,NULL,NULL,NULL),
 (119,'Reports for Selling','Available Stock For Packing Item','3','./app-selling/app-other-report/app-available-stock','NO',NULL,NULL,NULL,NULL),
 (120,'Reports for Selling','Pending SO Irems For Purchase Request','3','./app-selling/app-other-report/app-pending-item','NO',NULL,NULL,NULL,NULL),
 (121,'Reports for Selling','Customer Credit Balance','3','./app-selling/app-other-report/app-customer-credit-balance','NO',NULL,NULL,NULL,NULL),
 (122,'Human Resources','Employee Management','3','./app-human-resources/app-employee-details/app-employee','NO',NULL,NULL,NULL,NULL),
 (123,'Employee Management','Employee','3','./app-human-resources/app-employee-details/app-employee','NO',NULL,NULL,NULL,NULL),
 (124,'Employee Management','Department','3','./app-human-resources/app-employee-details/app-department','NO',NULL,NULL,NULL,NULL),
 (125,'Employee Management','Attendance','3','./app-human-resources/app-employee-details/app-attendance','NO',NULL,NULL,NULL,NULL),
 (126,'Recruitment','Job Opening','3','./app-human-resources/app-recruitment/app-job-opening','NO',NULL,NULL,NULL,NULL),
 (127,'Job Opening','Job Applicant','3','./app-human-resources/app-recruitment/app-job-applicant','NO',NULL,NULL,NULL,NULL),
 (128,'Job Opening','Offer Letter','3','./app-human-resources/app-recruitment/app-offer-letter','NO',NULL,NULL,NULL,NULL),
 (129,'Job Opening','Relieving Letter','3','./app-human-resources/app-recruitment/app-relieving-letter','NO',NULL,NULL,NULL,NULL),
 (130,'Job Opening','Experience Letter','3','./app-human-resources/app-recruitment/app-experience-letter','NO',NULL,NULL,NULL,NULL),
 (131,'Leaves and Holiday','Leave Application','3','./app-human-resources/app-leave-details/app-leave-application','NO',NULL,NULL,NULL,NULL),
 (132,'Leaves and Holiday','Leave Type','3','./app-human-resources/app-leave-details/app-leave-type','NO',NULL,NULL,NULL,NULL),
 (133,'Leaves and Holiday','Holiday List','3','./app-human-resources/app-leave-details/app-holiday-list','NO',NULL,NULL,NULL,NULL),
 (134,'Leaves and Holiday','Leave Block List','3','./app-human-resources/app-leave-details/app-leave-block','NO',NULL,NULL,NULL,NULL),
 (135,'Pay Roll',' PayRoll','3','./app-human-resources/app-leave-details/app-leave-block','NO',NULL,NULL,NULL,NULL),
 (136,'Pay Roll','Process Payroll','3','./app-human-resources/app-pay-roll/app-process-payroll','NO',NULL,NULL,NULL,NULL),
 (137,'Pay Roll','Salary Structure','3','./app-human-resources/app-pay-roll/app-salary-structure','NO',NULL,NULL,NULL,NULL),
 (138,'Pay Roll','Salary Component','3','./app-human-resources/app-pay-roll/app-salary-component','NO',NULL,NULL,NULL,NULL),
 (139,'Expense Claim','Expense Claim','3','./app-human-resources/app-expense-claim/app-expenses-claims','NO',NULL,NULL,NULL,NULL),
 (140,'Appraisals','Appraisals','3','./app-human-resources/app-appraisals/app-appraisal','NO',NULL,NULL,NULL,NULL),
 (141,'Appraisals','Appraisal Template','3','./app-human-resources/app-appraisals/app-appraisal-template','NO',NULL,NULL,NULL,NULL),
 (142,'Setup','Employment Type','3','./app-human-resources/app-human-setup/app-employment-type','NO',NULL,NULL,NULL,NULL),
 (143,'Setup','Branch','3','./app-human-resources/app-human-setup/app-branch','NO',NULL,NULL,NULL,NULL),
 (144,'Setup','Designation','3','./app-human-resources/app-human-setup/app-designation','NO',NULL,NULL,NULL,NULL),
 (145,'Setup','Department','3','./app-human-resources/app-human-setup/app-department','NO',NULL,NULL,NULL,NULL),
 (146,'Reports','Employee Leave Balance','3','./app-human-resources/app-employee-report-details/app-emp-leave-balance','NO',NULL,NULL,NULL,NULL),
 (147,'Reports','Employee Birthday','3','./app-human-resources/app-employee-report-details/app-emp-birthday','NO',NULL,NULL,NULL,NULL),
 (148,'Reports','EEmployee Working On Holiday','3','./app-human-resources/app-employee-report-details/app-emp-holiday-work','NO',NULL,NULL,NULL,NULL),
 (149,'Reports','Employee Sales Register','3','./app-human-resources/app-employee-report-details/app-emp-sales-register','NO',NULL,NULL,NULL,NULL),
 (150,'Reports','Employee Monthly Attendance','3','./app-human-resources/app-employee-report-details/app-month-attend-sheet','NO',NULL,NULL,NULL,NULL),
 (151,'Reports','Employee Information','3','./app-human-resources/app-employee-report-details/app-emp-information','NO',NULL,NULL,NULL,NULL),
 (152,'Sales Pipeline','Sales Pipeline','3','./app-crm/app-sales-pipeline/app-crm-sales-pipe-line','NO',NULL,NULL,NULL,NULL),
 (153,'Sales Pipeline','Contact','3','./app-crm/app-sales-pipeline/app-crm-contact','NO',NULL,NULL,NULL,NULL),
 (154,'Sales Pipeline','Customer','3','./app-crm/app-sales-pipeline/app-customer','NO',NULL,NULL,NULL,NULL),
 (155,'Sales Pipeline','Opportunity','3','./app-crm/app-sales-pipeline/app-opportunity','NO',NULL,NULL,NULL,NULL),
 (156,'Reports','Minimum Time Response','3','./app-crm/app-crm-report-details/app-mini-time-res','NO',NULL,NULL,NULL,NULL),
 (157,'Reports','Lead Details','3','./app-crm/app-crm-report-details/app-crm-lead-details','NO',NULL,NULL,NULL,NULL),
 (158,'Reports','Inactive Customers','3','./app-crm/app-crm-report-details/app-inactive-customers','NO',NULL,NULL,NULL,NULL),
 (159,'Reports','Customers','3','./app-crm/app-crm-report-details/app-customers','NO',NULL,NULL,NULL,NULL),
 (160,'Setup','Communication','3','./app-crm/app-crm-setup-details/app-crm-communication','NO',NULL,NULL,NULL,NULL),
 (161,'Setup','Customer Sales Group','3','./app-crm/app-crm-setup-details/app-crm-cust-group','NO',NULL,NULL,NULL,NULL),
 (162,'Setup','Territory','3','./app-crm/app-crm-setup-details/app-crm-territory','NO',NULL,NULL,NULL,NULL),
 (163,'Project','Project','3','./app-projects/app-project/app-project','NO',NULL,NULL,NULL,NULL),
 (164,'Project','Task','3','./app-projects/app-project/app-task','NO',NULL,NULL,NULL,NULL),
 (165,'Project','Calendar','3','./app-projects/app-project/app-calander','NO',NULL,NULL,NULL,NULL),
 (166,'Project','Gatt Chart','3','./app-projects/app-project/app-gantt-chart','NO',NULL,NULL,NULL,NULL),
 (167,'Time Tracking','Timesheet','3','./app-projects/app-time-traking/app-time-sheet','NO',NULL,NULL,NULL,NULL),
 (168,'Time Tracking','Active Type','3','./app-projects/app-time-traking/app-active-type','NO',NULL,NULL,NULL,NULL),
 (169,'Time Tracking','Active Cost','3','./app-projects/app-time-traking/app-active-cost','NO',NULL,NULL,NULL,NULL),
 (170,'Stock Transactions','Stock Entry','3','./app-stock/app-stock-trans/app-stock-entry','NO',NULL,NULL,NULL,NULL),
 (171,'Stock Transactions','Delivery Note','3','./app-stock/app-stock-trans/app-delivery-note','NO',NULL,NULL,NULL,NULL),
 (172,'Stock Transactions','Purchase Receipt','3','./app-stock/app-stock-trans/app-purchase-receipt','NO',NULL,NULL,NULL,NULL),
 (173,'Stock Transactions','Material Request','3','./app-stock/app-stock-trans/app-material-req','NO',NULL,NULL,NULL,NULL),
 (174,'Stock Reports','Stock Ledger','3','./app-stock/app-stock-report/app-stock-ledger','NO',NULL,NULL,NULL,NULL),
 (175,'Stock Reports','Stock Balance','3','./app-stock/app-stock-report/app-stock-balance','NO',NULL,NULL,NULL,NULL),
 (176,'Stock Reports','Projected Quantity','3','./app-stock/app-stock-report/app-projected-quantity','NO',NULL,NULL,NULL,NULL),
 (177,'Stock Reports','Stock Ageing','3','./app-stock/app-stock-report/app-stock-ageing','NO',NULL,NULL,NULL,NULL),
 (178,'Item and Pricing','Item Group','3','./app-stock/app-items-pricing/app-item-group','NO',NULL,NULL,NULL,NULL),
 (179,'Item and Pricing','Item Price','3','./app-stock/app-items-pricing/app-item-price','NO',NULL,NULL,NULL,NULL),
 (180,'Item and Pricing','Product Bundle','3','./app-stock/app-items-pricing/app-product-bundle','NO',NULL,NULL,NULL,NULL),
 (181,'Item and Pricing','Pricing Rule','3','./app-stock/app-items-pricing/app-pricing-rule','NO',NULL,NULL,NULL,NULL),
 (182,'Item and Pricing','Shipping Rule','3','./app-stock/app-items-pricing/app-shipping-rule','NO',NULL,NULL,NULL,NULL),
 (183,'Item and Pricing','Item','3','./app-stock/app-items-pricing/app-item','NO',NULL,NULL,NULL,NULL),
 (184,'Tools','Installation Note','3','./app-stock/app-stock-tools/app-installation-note','NO',NULL,NULL,NULL,NULL),
 (185,'Tools','Stock Reconcile','3','./app-stock/app-stock-tools/app-stock-reconcile','NO',NULL,NULL,NULL,NULL),
 (186,'Tools','Packing Slip','3','./app-stock/app-stock-tools/app-packing-slip','NO',NULL,NULL,NULL,NULL),
 (187,'Tools','Land Cost Voucher','3','./app-stock/app-stock-tools/app-land-cost-voucher','NO',NULL,NULL,NULL,NULL),
 (188,'Setup','Stock Setting','3','./app-stock/app-stock-setup-details/app-stk-setting','NO',NULL,NULL,NULL,NULL),
 (189,'Setup','Ware house','3','./app-stock/app-stock-setup-details/app-ware-house','NO',NULL,NULL,NULL,NULL),
 (190,'Setup','Unit of Measure','3','./app-stock/app-stock-setup-details/app-unit-of-measure','NO',NULL,NULL,NULL,NULL),
 (191,'Setup','Brand','3','./app-stock/app-stock-setup-details/app-brand','NO',NULL,NULL,NULL,NULL),
 (192,'Analytics','Delivery Note Trend','3','./app-stock/app-stock-analytics-details/app-del-note-trend','NO',NULL,NULL,NULL,NULL),
 (193,'Analytics','Purchase Receipt Trend','3','./app-stock/app-stock-analytics-details/app-pur-recpt-trend','NO',NULL,NULL,NULL,NULL),
 (194,'Reports','Order Item Delivered','3','./app-stock/app-stock-reports-details/app-ord-itm-deliver','NO',NULL,NULL,NULL,NULL),
 (195,'Reports','Purchase Item Order','3','./app-stock/app-stock-reports-details/app-pur-itm-order','NO',NULL,NULL,NULL,NULL),
 (196,'Reports','Item Shortage','3','./app-stock/app-stock-reports-details/app-itm-shortage','NO',NULL,NULL,NULL,NULL),
 (197,'Reports','Request Item Transfer','3','./app-stock/app-stock-reports-details/app-req-itm-transfer','NO',NULL,NULL,NULL,NULL),
 (198,'Reports','Item Price Report','3','./app-stock/app-stock-reports-details/app-itm-price-report','NO',NULL,NULL,NULL,NULL),
 (199,'Reports','Item Wise Level','3','./app-stock/app-stock-reports-details/app-itm-wise-level','NO',NULL,NULL,NULL,NULL),
 (200,'Tools','Tools','3','./app-tools/app-tools-details/app-tool','NO',NULL,NULL,NULL,NULL),
 (201,'Issues','Issues','3','./app-support/app-support-issues/app-issue','NO',NULL,NULL,NULL,NULL),
 (202,'Issues','Minutes to First Response','3','./app-support/app-support-issues/app-minutes-to-response','NO',NULL,NULL,NULL,NULL),
 (203,'Issues','Communication','3','./app-support/app-support-issues/app-communication','NO',NULL,NULL,NULL,NULL),
 (204,'Warranty','Support Analytics','3','./app-support/app-reports/app-support-analytics','NO',NULL,NULL,NULL,NULL),
 (205,'Warranty','Minutes to First Reponse for Issues','3','./app-support/app-reports/app-minutes-response-issues','NO',NULL,NULL,NULL,NULL),
 (206,'Dashboard','Dashboard','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (207,'Dashboard','Accounts','2','./app-sidemenu-dashboard/app-accounts-dashboard','NO',NULL,NULL,NULL,NULL),
 (208,'Dashboard','CRM','2','./app-sidemenu-dashboard/app-crm-dashboard','NO',NULL,NULL,NULL,NULL),
 (209,'Dashboard','Employee','2','./app-sidemenu-dashboard/app-employee-dashboard','NO',NULL,NULL,NULL,NULL),
 (210,'Dashboard','Purchase','2','./app-sidemenu-dashboard/app-purchase-dashboard','NO',NULL,NULL,NULL,NULL),
 (211,'Dashboard','Sales','2','./app-sidemenu-dashboard/app-sales-dashboard','NO',NULL,NULL,NULL,NULL),
 (212,'Manufacturing','Manufacturing','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (213,'Manufacturing','Production','2','./app-manufacturing/app-product-order-details/app-prod-order','NO',NULL,NULL,NULL,NULL),
 (214,'Manufacturing','Bill of Materials','2','./app-manufacturing/app-bom-details/app-material','NO',NULL,NULL,NULL,NULL),
 (215,'Manufacturing','Tools','2','./app-manufacturing/app-manu-tools/app-tools','NO',NULL,NULL,NULL,NULL),
 (216,'Manufacturing','SetUp','2','./app-manufacturing/app-manu-setup/app-setup','NO',NULL,NULL,NULL,NULL),
 (217,'Manufacturing','Reports','2','./app-manufacturing/app-product-reportdetails/app-open-order','NO',NULL,NULL,NULL,NULL),
 (218,'Manufacturing','Help','2','./app-manufacturing/app-manu-help','NO',NULL,NULL,NULL,NULL),
 (219,'Accounts','Accounts','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (220,'Accounts','Billing','2','./app-accounts/app-billing/app-accounts-receivable','NO',NULL,NULL,NULL,NULL),
 (221,'Company and Accounts','Billing','2','./app-accounts/app-billing/app-accounts-receivable','NO',NULL,NULL,NULL,NULL),
 (222,'Banking Payments','Billing','2','./app-accounts/app-banking-payments/app-update-bank','NO',NULL,NULL,NULL,NULL),
 (223,'Taxes','Billing','2','./app-accounts/app-taxes/app-sales-taxes','NO',NULL,NULL,NULL,NULL),
 (224,'Budget and Cost Center','Billing','2','./app-accounts/app-budget-costcenter/app-costcenter','NO',NULL,NULL,NULL,NULL),
 (225,'Tools','Billing','2','./app-accounts/app-acc-tools/app-periodclosing-voucher','NO',NULL,NULL,NULL,NULL),
 (226,'SetUp','Billing','2','./app-accounts/app-account-setup','NO',NULL,NULL,NULL,NULL),
 (227,'To Bill','Billing','2','./app-accounts/app-to-bill/app-order-item','NO',NULL,NULL,NULL,NULL),
 (228,'Analytics','Billing','2','./app-accounts/app-analytics/app-gross-profit','NO',NULL,NULL,NULL,NULL),
 (229,'Other Reports','Billing','2','./app-accounts/app-other-reports','NO',NULL,NULL,NULL,NULL),
 (230,'Help','Billing','2','./app-accounts/app-account-help','NO',NULL,NULL,NULL,NULL),
 (231,'Buying','Buying','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (232,'Purchasing','Buying','2','./app-buying/app-purchase-details/app-prmat-req','NO',NULL,NULL,NULL,NULL),
 (233,'Supplier','Buying','2','./app-buying/app-supplier-details/app-buying-supplier','NO',NULL,NULL,NULL,NULL),
 (234,'Items and Pricing','Buying','2','./app-buying/app-item-price-details/app-item-group','NO',NULL,NULL,NULL,NULL),
 (235,'Analytics','Buying','2','./app-buying/app-analytics/app-pu-analytics','NO',NULL,NULL,NULL,NULL),
 (236,'OtherReports','Buying','2','./app-buying/app-buying-report-details/app-item-request','NO',NULL,NULL,NULL,NULL),
 (237,'SetUp','Buying','2','./app-buying/app-setup','NO',NULL,NULL,NULL,NULL),
 (238,'Help','Buying','2','./app-buying/app-buying-help','NO',NULL,NULL,NULL,NULL),
 (239,'Selling','Selling','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (240,'Sales','Selling','2','./app-selling/app-salse/app-quot-trends','NO',NULL,NULL,NULL,NULL),
 (241,'Customers','Selling','2','./app-selling/app-customers/app-customer-group','NO',NULL,NULL,NULL,NULL),
 (242,'Items and Pricing','Selling','2','./app-selling/app-item-price-details/app-item-group','NO',NULL,NULL,NULL,NULL),
 (243,'Sales Parteners and Territory','Selling','2','./app-selling/app-salse-pat-terr/app-territory','NO',NULL,NULL,NULL,NULL),
 (244,'Analytics','Selling','2','./app-selling/app-analytics/app-sales-analytics','NO',NULL,NULL,NULL,NULL),
 (245,'Other Reports','Selling','2','./app-selling/app-other-report/app-lead-detail','NO',NULL,NULL,NULL,NULL),
 (246,'SetUp','Selling','2','./app-selling/app-setup','NO',NULL,NULL,NULL,NULL),
 (247,'Help','Selling','2','./app-selling/app-selling-help','NO',NULL,NULL,NULL,NULL),
 (248,'Human Resources','Human Resources','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (249,'Empoyee Management','Human Resources','2','./app-human-resources/app-employee-details/app-employee','NO',NULL,NULL,NULL,NULL),
 (250,'Recruitment','Human Resources','2','./app-human-resources/app-recruitment/app-job-opening','NO',NULL,NULL,NULL,NULL),
 (251,'Leaves and Holiday','Human Resources','2','./app-human-resources/app-leave-details/app-leave-application','NO',NULL,NULL,NULL,NULL),
 (252,'Pay Roll','Human Resources','2','./app-human-resources/app-pay-roll/app-pay-rolls','NO',NULL,NULL,NULL,NULL),
 (253,'Expense Claims','Human Resources','2','./app-human-resources/app-expense-claim/app-expenses-claims','NO',NULL,NULL,NULL,NULL),
 (254,'Appraisals','Human Resources','2','./app-human-resources/app-appraisals/app-appraisal','NO',NULL,NULL,NULL,NULL),
 (255,'SetUp','Human Resources','2','./app-human-resources/app-human-setup/app-employment-type','NO',NULL,NULL,NULL,NULL),
 (256,'Reports','Human Resources','2','./app-human-resources/app-human-setup/app-employment-type','NO',NULL,NULL,NULL,NULL),
 (257,'Help','Human Resources','2','./app-human-resources/app-human-help','NO',NULL,NULL,NULL,NULL),
 (258,'CRM','CRM','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (259,'Sales Pipeline','CRM','2','./app-crm/app-sales-pipeline/app-crm-sales-pipe-line','NO',NULL,NULL,NULL,NULL),
 (260,'Reports','CRM','2','./app-crm/app-crm-report-details/app-mini-time-res','NO',NULL,NULL,NULL,NULL),
 (261,'SetUp','CRM','2','./app-crm/app-crm-setup-details/app-crm-communication','NO',NULL,NULL,NULL,NULL),
 (262,'Communication','CRM','2','./app-crm/app-crm-comm-details','NO',NULL,NULL,NULL,NULL),
 (263,'Help','CRM','2','./app-crm/app-crm-help','NO',NULL,NULL,NULL,NULL),
 (264,'Projects','Projects','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (265,'Project','Projects','2','./app-projects/app-project/app-projectt','NO',NULL,NULL,NULL,NULL),
 (266,'Time Tracking','Projects','2','./app-projects/app-time-traking/app-time-sheet','NO',NULL,NULL,NULL,NULL),
 (267,'Reports','Projects','2','./app-projects/app-reports','NO',NULL,NULL,NULL,NULL),
 (268,'Help','Projects','2','./app-projects/app-project-help','NO',NULL,NULL,NULL,NULL),
 (269,'Stock','Stock','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (270,'Stock','Stock Transactions','2','./app-stock/app-stock-trans/app-stock-entry','NO',NULL,NULL,NULL,NULL),
 (271,'Stock','Stock Reports','2','./app-stock/app-stock-report/app-stock-ledger','NO',NULL,NULL,NULL,NULL),
 (272,'Tools','Stock Reports','2','./app-stock/app-stock-tools/app-installation-note','NO',NULL,NULL,NULL,NULL),
 (273,'SetUp','Stock Reports','2','./app-stock/app-stock-setup-details/app-stk-setting','NO',NULL,NULL,NULL,NULL),
 (274,'Analytics','Stock Reports','2','./app-stock/app-stock-analytics-details/app-del-note-trend','NO',NULL,NULL,NULL,NULL),
 (275,'Reports','Stock Reports','2','./app-stock/app-stock-reports-details/app-ord-itm-deliver','NO',NULL,NULL,NULL,NULL),
 (276,'Help','Stock Reports','2','./app-stock/app-stock-help','NO',NULL,NULL,NULL,NULL),
 (277,'Tools','Tools','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (278,'Tools','Tools','2','./app-manufacturing/app-manu-tools/app-tools','NO',NULL,NULL,NULL,NULL),
 (279,'Supports','Supports','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (280,'Issues','Supports','2','./app-support/app-support-issues/app-issues/app-issue','NO',NULL,NULL,NULL,NULL),
 (281,'Warranty','Supports','2','./app-support/app-warranty','NO',NULL,NULL,NULL,NULL),
 (282,'Reports','Supports','2','./app-support/app-reports/app-support-analytics','NO',NULL,NULL,NULL,NULL),
 (283,'Help','Supports','2','./app-support/app-support-help','NO',NULL,NULL,NULL,NULL),
 (284,'Purchase Order','Purchase Order','1','./app-purchase-order','NO',NULL,NULL,NULL,NULL),
 (285,'Sales Order','Sales  Order','1','./app-sales-order/app-support-analytics','NO',NULL,NULL,NULL,NULL),
 (286,'Production Order','Production Order','1','./app-productions-orders/app-production-orders','NO',NULL,NULL,NULL,NULL),
 (287,'POS','POS','1','./app-point-of-sale/app-pos','NO',NULL,NULL,NULL,NULL),
 (288,'Item','Item','1','./app-item/app-sales-order','NO',NULL,NULL,NULL,NULL),
 (289,'E-commerce','E-commerce','1','./app-e-commerce','NO',NULL,NULL,NULL,NULL),
 (290,'Task','Task','1','./app-task','NO',NULL,NULL,NULL,NULL),
 (291,'Customer','Customer','1','./app-customer/app-customer-ac-lo','NO',NULL,NULL,NULL,NULL),
 (292,'File Manager','File Manager','1','./app-file-manager','NO',NULL,NULL,NULL,NULL),
 (293,'Lead','Lead','1','./app-lead-details','NO',NULL,NULL,NULL,NULL),
 (294,'Supplier','Supplier','1','./app-supplier','NO',NULL,NULL,NULL,NULL),
 (295,'Issue','Issue','1','./app-issue','NO',NULL,NULL,NULL,NULL),
 (296,'Stock Entry','Stock Entry','1','./app-stocks-entrys','NO',NULL,NULL,NULL,NULL),
 (297,'Profit and Loss Statement','Profit and Loss Statement','1','./app-profits-losses','NO',NULL,NULL,NULL,NULL),
 (298,'Budget Variance Report','Budget Variance Report','1','./app-budget-varaince-report','NO',NULL,NULL,NULL,NULL),
 (299,'Item Wise Sales Register','Item Wise Sales Register','1','./app-item-wise-sales-register','NO',NULL,NULL,NULL,NULL),
 (300,'Item Report','Item Report','1','./app-item-report/app-item-report-details/app-item','NO',NULL,NULL,NULL,NULL),
 (301,'Customer Report','Customer Report','1','./app-customer-reports/app-customer-dt','NO',NULL,NULL,NULL,NULL),
 (302,'Explore','Explore','1','./app-explore','NO',NULL,NULL,NULL,NULL),
 (303,'Learn','Learn','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (304,'General','Learn','2','./app-learn/app-general','NO',NULL,NULL,NULL,NULL),
 (305,'Manufacturing','Learn','2','./app-learn/app-learn-manufacturing','NO',NULL,NULL,NULL,NULL),
 (306,'Accounts','Learn','2','./app-learn/app-learn-accounts','NO',NULL,NULL,NULL,NULL),
 (307,'Buying','Learn','2','./app-learn/app-learn-buying','NO',NULL,NULL,NULL,NULL),
 (308,'Selling','Learn','2','./app-learn/app-learn-selling','NO',NULL,NULL,NULL,NULL),
 (309,'HumanResources','Learn','2','./app-learn/app-learn-human-resources','NO',NULL,NULL,NULL,NULL),
 (310,'CRM','Learn','2','./app-learn/app-learn-crm','NO',NULL,NULL,NULL,NULL),
 (311,'Projects','Learn','2','./app-learn/app-learn-projects','NO',NULL,NULL,NULL,NULL),
 (312,'Stock','Learn','2','./app-learn/app-learn-stock','NO',NULL,NULL,NULL,NULL),
 (313,'Tools','Learn','2','./app-learn/app-learn-tools','NO',NULL,NULL,NULL,NULL),
 (314,'Support','Learn','2','./app-learn/app-learn-support','NO',NULL,NULL,NULL,NULL),
 (315,'Header','colors','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (316,'Header','view notification','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (317,'Header','more options','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (318,'Header','help','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (319,'Header','logout','1',NULL,'NO',NULL,NULL,NULL,NULL),
 (321,'dashboard','More Options','1','./app-dash-board','NO',NULL,NULL,NULL,NULL),
 (322,'profile','More Options','1','./app-setting/app-profile/app-registration','NO',NULL,NULL,NULL,NULL),
 (323,'themes','More Options','1','./app-setting/app-settings','NO',NULL,NULL,NULL,NULL),
 (324,'favourites','More Options','1','./app-setting/app-favourites','NO',NULL,NULL,NULL,NULL),
 (325,'about','More Options','1','./app-setting/app-about','NO',NULL,NULL,NULL,NULL),
 (326,'import-export','More Options','1','./app-setting/app-import-export','NO',NULL,NULL,NULL,NULL),
 (327,'application-setting','More Options','1','./app-setting/app-application-setting','NO',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `applicationsettings001mb` ENABLE KEYS */;


--
-- Definition of table `appraisal001hb`
--

DROP TABLE IF EXISTS `appraisal001hb`;
CREATE TABLE `appraisal001hb` (
  `apprId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(30) NOT NULL,
  `appraisalTemp` varchar(40) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`apprId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appraisal001hb`
--

/*!40000 ALTER TABLE `appraisal001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `appraisal001hb` ENABLE KEYS */;


--
-- Definition of table `appraisal001mb`
--

DROP TABLE IF EXISTS `appraisal001mb`;
CREATE TABLE `appraisal001mb` (
  `apprId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(30) NOT NULL,
  `appraisalTemp` varchar(40) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`apprId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appraisal001mb`
--

/*!40000 ALTER TABLE `appraisal001mb` DISABLE KEYS */;
INSERT INTO `appraisal001mb` (`apprId`,`series`,`appraisalTemp`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'SER_001','Mode_1','','0000-00-00 00:00:00',NULL,NULL),
 (2,'SER_002','LTT','','0000-00-00 00:00:00',NULL,NULL),
 (3,'SER_002','Dummy1','','0000-00-00 00:00:00',NULL,NULL),
 (5,'LEV/007','LTT','insertuser','2021-09-01 15:42:27','updateuser','2021-09-01 15:43:11');
/*!40000 ALTER TABLE `appraisal001mb` ENABLE KEYS */;


--
-- Definition of table `apprtemp001hb`
--

DROP TABLE IF EXISTS `apprtemp001hb`;
CREATE TABLE `apprtemp001hb` (
  `apptmpId` int(11) NOT NULL AUTO_INCREMENT,
  `appraisalTemp` varchar(40) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`apptmpId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `apprtemp001hb`
--

/*!40000 ALTER TABLE `apprtemp001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `apprtemp001hb` ENABLE KEYS */;


--
-- Definition of table `apprtemp001mb`
--

DROP TABLE IF EXISTS `apprtemp001mb`;
CREATE TABLE `apprtemp001mb` (
  `apptmpId` int(11) NOT NULL AUTO_INCREMENT,
  `appraisalTemp` varchar(40) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`apptmpId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `apprtemp001mb`
--

/*!40000 ALTER TABLE `apprtemp001mb` DISABLE KEYS */;
INSERT INTO `apprtemp001mb` (`apptmpId`,`appraisalTemp`,`description`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'Mode_1','Hard Work','','0000-00-00 00:00:00',NULL,NULL),
 (2,'LTT','Full Attendance','','0000-00-00 00:00:00',NULL,NULL),
 (3,'LTT','Full Attendance','','0000-00-00 00:00:00',NULL,NULL),
 (4,'','','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `apprtemp001mb` ENABLE KEYS */;


--
-- Definition of table `appsetting001hb`
--

DROP TABLE IF EXISTS `appsetting001hb`;
CREATE TABLE `appsetting001hb` (
  `appsetid` int(11) NOT NULL AUTO_INCREMENT,
  `property` varchar(250) DEFAULT NULL,
  `link` varchar(250) DEFAULT NULL,
  `login_user` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `insert_user` varchar(50) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(50) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`appsetid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appsetting001hb`
--

/*!40000 ALTER TABLE `appsetting001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `appsetting001hb` ENABLE KEYS */;


--
-- Definition of table `appsetting001mb`
--

DROP TABLE IF EXISTS `appsetting001mb`;
CREATE TABLE `appsetting001mb` (
  `appsetid` int(11) NOT NULL AUTO_INCREMENT,
  `property` varchar(250) DEFAULT NULL,
  `link` varchar(250) DEFAULT NULL,
  `login_user` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `insert_user` varchar(50) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(50) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`appsetid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appsetting001mb`
--

/*!40000 ALTER TABLE `appsetting001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `appsetting001mb` ENABLE KEYS */;


--
-- Definition of table `asset001hb`
--

DROP TABLE IF EXISTS `asset001hb`;
CREATE TABLE `asset001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `asset` varchar(45) NOT NULL,
  `purchaseamount` int(10) unsigned NOT NULL,
  `depreciationamount` int(10) unsigned NOT NULL,
  `accumulateddepreciationamount` int(10) unsigned NOT NULL,
  `amountafterdepreciation` int(10) unsigned NOT NULL,
  `depreciationentry` varchar(45) NOT NULL,
  `assetcategory` varchar(45) NOT NULL,
  `currentstatus` varchar(45) NOT NULL,
  `depreciationmethod` varchar(45) NOT NULL,
  `depreciationdate` datetime NOT NULL,
  `purchasedate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `asset001hb`
--

/*!40000 ALTER TABLE `asset001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `asset001hb` ENABLE KEYS */;


--
-- Definition of table `asset001mb`
--

DROP TABLE IF EXISTS `asset001mb`;
CREATE TABLE `asset001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `asset` varchar(45) NOT NULL,
  `purchaseamount` int(10) unsigned NOT NULL,
  `depreciationamount` int(10) unsigned NOT NULL,
  `accumulateddepreciationamount` int(10) unsigned NOT NULL,
  `amountafterdepreciation` int(10) unsigned NOT NULL,
  `depreciationentry` varchar(45) NOT NULL,
  `assetcategory` varchar(45) NOT NULL,
  `currentstatus` varchar(45) NOT NULL,
  `depreciationmethod` varchar(45) NOT NULL,
  `depreciationdate` datetime NOT NULL,
  `purchasedate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `asset001mb`
--

/*!40000 ALTER TABLE `asset001mb` DISABLE KEYS */;
INSERT INTO `asset001mb` (`id`,`asset`,`purchaseamount`,`depreciationamount`,`accumulateddepreciationamount`,`amountafterdepreciation`,`depreciationentry`,`assetcategory`,`currentstatus`,`depreciationmethod`,`depreciationdate`,`purchasedate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (17,'DS',464,46365,6544,4545,'22','34','3453','373','2022-02-14 18:30:00','2022-02-20 18:30:00','latha','2022-02-10 00:48:23','latha','2022-02-10 00:48:57');
/*!40000 ALTER TABLE `asset001mb` ENABLE KEYS */;


--
-- Definition of table `assetmovement001hb`
--

DROP TABLE IF EXISTS `assetmovement001hb`;
CREATE TABLE `assetmovement001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `asset` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `targetwarehouse` varchar(255) DEFAULT NULL,
  `transactiondate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assetmovement001hb`
--

/*!40000 ALTER TABLE `assetmovement001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `assetmovement001hb` ENABLE KEYS */;


--
-- Definition of table `assetmovement001mb`
--

DROP TABLE IF EXISTS `assetmovement001mb`;
CREATE TABLE `assetmovement001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `asset` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `targetwarehouse` varchar(255) DEFAULT NULL,
  `transactiondate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assetmovement001mb`
--

/*!40000 ALTER TABLE `assetmovement001mb` DISABLE KEYS */;
INSERT INTO `assetmovement001mb` (`id`,`asset`,`company`,`targetwarehouse`,`transactiondate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (18,'Dummy1','NANDALALA','AUG','2022-02-10 18:30:00','sheik','2022-02-11 05:08:38','sheik','2022-02-11 05:08:52'),
 (19,'Dummy2','NANDALALA','55','2022-02-10 18:30:00','sheik','2022-02-11 05:09:13','sheik','2022-02-11 05:09:24'),
 (20,'Dummy2','NANDALALA','78','2022-02-11 18:30:00','sheik','2022-02-11 05:10:11','sheik','2022-02-11 05:10:22'),
 (21,'Dummy1','NANDALALA','SHEIK MD','2022-02-16 18:30:00','sheik','2022-02-11 05:10:43','sheik','2022-02-11 05:10:53');
/*!40000 ALTER TABLE `assetmovement001mb` ENABLE KEYS */;


--
-- Definition of table `bankclearance001hb`
--

DROP TABLE IF EXISTS `bankclearance001hb`;
CREATE TABLE `bankclearance001hb` (
  `bankclrId` int(11) NOT NULL AUTO_INCREMENT,
  `bankAccount` varchar(50) NOT NULL,
  `payDocument` varchar(50) NOT NULL,
  `entrySeries` varchar(50) NOT NULL,
  `chequeref` varchar(50) NOT NULL,
  `againstAccount` varchar(50) NOT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `fromDate` datetime NOT NULL,
  `toDate` datetime NOT NULL,
  `clearanceDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bankclrId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bankclearance001hb`
--

/*!40000 ALTER TABLE `bankclearance001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `bankclearance001hb` ENABLE KEYS */;


--
-- Definition of table `bankclearance001mb`
--

DROP TABLE IF EXISTS `bankclearance001mb`;
CREATE TABLE `bankclearance001mb` (
  `bankclrId` int(11) NOT NULL AUTO_INCREMENT,
  `bankAccount` varchar(50) NOT NULL,
  `payDocument` varchar(50) NOT NULL,
  `entrySeries` varchar(50) NOT NULL,
  `chequeref` varchar(50) NOT NULL,
  `againstAccount` varchar(50) NOT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `fromDate` datetime NOT NULL,
  `toDate` datetime NOT NULL,
  `clearanceDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bankclrId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bankclearance001mb`
--

/*!40000 ALTER TABLE `bankclearance001mb` DISABLE KEYS */;
INSERT INTO `bankclearance001mb` (`bankclrId`,`bankAccount`,`payDocument`,`entrySeries`,`chequeref`,`againstAccount`,`amount`,`fromDate`,`toDate`,`clearanceDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (16,'Sales','54465','56','78921','Dummy2','200000.0000','2022-02-16 18:30:00','2022-02-23 18:30:00','2022-02-13 18:30:00','sheik','2022-02-10 16:12:35','sheik','2022-02-10 16:12:52');
/*!40000 ALTER TABLE `bankclearance001mb` ENABLE KEYS */;


--
-- Definition of table `bankreconcile001hb`
--

DROP TABLE IF EXISTS `bankreconcile001hb`;
CREATE TABLE `bankreconcile001hb` (
  `bankrecId` int(11) NOT NULL AUTO_INCREMENT,
  `bankAccount` varchar(50) NOT NULL,
  `entrySeries` varchar(50) NOT NULL,
  `againstAccount` varchar(50) NOT NULL,
  `referenceName` varchar(50) NOT NULL,
  `currency` varchar(40) NOT NULL,
  `postingDate` datetime NOT NULL,
  `debit` int(11) NOT NULL,
  `credit` int(11) NOT NULL,
  `referenceDate` datetime NOT NULL,
  `clearanceDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bankrecId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bankreconcile001hb`
--

/*!40000 ALTER TABLE `bankreconcile001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `bankreconcile001hb` ENABLE KEYS */;


--
-- Definition of table `bankreconcile001mb`
--

DROP TABLE IF EXISTS `bankreconcile001mb`;
CREATE TABLE `bankreconcile001mb` (
  `bankrecId` int(11) NOT NULL AUTO_INCREMENT,
  `bankAccount` varchar(50) NOT NULL,
  `entrySeries` varchar(50) NOT NULL,
  `againstAccount` varchar(50) NOT NULL,
  `referenceName` varchar(50) NOT NULL,
  `currency` varchar(40) NOT NULL,
  `postingDate` datetime NOT NULL,
  `debit` int(11) NOT NULL,
  `credit` int(11) NOT NULL,
  `referenceDate` datetime NOT NULL,
  `clearanceDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bankrecId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bankreconcile001mb`
--

/*!40000 ALTER TABLE `bankreconcile001mb` DISABLE KEYS */;
INSERT INTO `bankreconcile001mb` (`bankrecId`,`bankAccount`,`entrySeries`,`againstAccount`,`referenceName`,`currency`,`postingDate`,`debit`,`credit`,`referenceDate`,`clearanceDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (13,'Cost of Goods Sold','56','Dummy1','sheik','USD','2022-02-21 18:30:00',879654,4234,'2022-02-21 18:30:00','2022-02-23 18:30:00','sheik','2022-02-10 16:10:19','sheik','2022-02-10 16:10:31');
/*!40000 ALTER TABLE `bankreconcile001mb` ENABLE KEYS */;


--
-- Definition of table `bom001hb`
--

DROP TABLE IF EXISTS `bom001hb`;
CREATE TABLE `bom001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bom` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bom001hb`
--

/*!40000 ALTER TABLE `bom001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `bom001hb` ENABLE KEYS */;


--
-- Definition of table `bom001mb`
--

DROP TABLE IF EXISTS `bom001mb`;
CREATE TABLE `bom001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bom` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bom001mb`
--

/*!40000 ALTER TABLE `bom001mb` DISABLE KEYS */;
INSERT INTO `bom001mb` (`id`,`bom`,`type`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'BOM - Windmill A series','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (2,'BOM - Bearing Assembly','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (3,'BOM - Wing Sheet','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (4,'BOM - Base Plate','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (5,'BOM - Wind Turbine - S001','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (6,'BOM - Base Bearing Plate 001','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (7,'BOM - Base Bearing Plate 002','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (8,'BOM - Wind Turbine - S002','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (9,'BOM - Windmill B series','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (10,'BOM - Wind Turbine - S001','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (11,'BOM - Windmill B series','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (12,'BOM - Windmill B series','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (13,'BOM - Windmill B series','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (14,'BOM - Base Plate','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (15,'BOM - Wing Sheet','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (16,'BOM - Windmill B series','BOM','','0000-00-00 00:00:00',NULL,NULL),
 (17,'BOM - Wind Turbine - S001','BOM ','','0000-00-00 00:00:00',NULL,NULL),
 (18,'BOM - Windmill B series','BOM ','','0000-00-00 00:00:00',NULL,NULL),
 (19,'BOM - Wind Turbine - S001','BOM ','','0000-00-00 00:00:00',NULL,NULL),
 (20,'BOM - Wind Turbine - S001','BOM ','','0000-00-00 00:00:00',NULL,NULL),
 (21,'BOM ','BOM ','','0000-00-00 00:00:00',NULL,NULL),
 (22,'BOM ','BOM ','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `bom001mb` ENABLE KEYS */;


--
-- Definition of table `bomtype001hb`
--

DROP TABLE IF EXISTS `bomtype001hb`;
CREATE TABLE `bomtype001hb` (
  `bomId` int(11) NOT NULL AUTO_INCREMENT,
  `bomName` varchar(100) NOT NULL,
  `bomType` varchar(40) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bomId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bomtype001hb`
--

/*!40000 ALTER TABLE `bomtype001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `bomtype001hb` ENABLE KEYS */;


--
-- Definition of table `bomtype001mb`
--

DROP TABLE IF EXISTS `bomtype001mb`;
CREATE TABLE `bomtype001mb` (
  `bomId` int(11) NOT NULL AUTO_INCREMENT,
  `bomName` varchar(100) NOT NULL,
  `bomType` varchar(40) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bomId`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bomtype001mb`
--

/*!40000 ALTER TABLE `bomtype001mb` DISABLE KEYS */;
INSERT INTO `bomtype001mb` (`bomId`,`bomName`,`bomType`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (26,'rtdd','ewr','insertuser','2021-09-01 15:20:10','updateuser','2021-09-01 15:20:14'),
 (27,'SHEIK','333','latha','2022-02-09 23:31:02','latha','2022-02-09 23:31:24');
/*!40000 ALTER TABLE `bomtype001mb` ENABLE KEYS */;


--
-- Definition of table `branch001hb`
--

DROP TABLE IF EXISTS `branch001hb`;
CREATE TABLE `branch001hb` (
  `branchId` int(11) NOT NULL AUTO_INCREMENT,
  `branchName` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`branchId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `branch001hb`
--

/*!40000 ALTER TABLE `branch001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `branch001hb` ENABLE KEYS */;


--
-- Definition of table `branch001mb`
--

DROP TABLE IF EXISTS `branch001mb`;
CREATE TABLE `branch001mb` (
  `branchId` int(11) NOT NULL AUTO_INCREMENT,
  `branchName` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`branchId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `branch001mb`
--

/*!40000 ALTER TABLE `branch001mb` DISABLE KEYS */;
INSERT INTO `branch001mb` (`branchId`,`branchName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (12,'TRICHY THALAKUDI','sheik','2022-02-11 09:42:53','sheik','2022-02-11 09:43:11');
/*!40000 ALTER TABLE `branch001mb` ENABLE KEYS */;


--
-- Definition of table `brand001hb`
--

DROP TABLE IF EXISTS `brand001hb`;
CREATE TABLE `brand001hb` (
  `brandId` int(11) NOT NULL AUTO_INCREMENT,
  `brandName` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`brandId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand001hb`
--

/*!40000 ALTER TABLE `brand001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `brand001hb` ENABLE KEYS */;


--
-- Definition of table `brand001mb`
--

DROP TABLE IF EXISTS `brand001mb`;
CREATE TABLE `brand001mb` (
  `brandId` int(11) NOT NULL AUTO_INCREMENT,
  `brandName` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`brandId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand001mb`
--

/*!40000 ALTER TABLE `brand001mb` DISABLE KEYS */;
INSERT INTO `brand001mb` (`brandId`,`brandName`,`description`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,'SHEIK','TOOL KIT','sheik','2022-02-11 11:44:24','sheik','2022-02-11 11:44:36'),
 (5,'eweq','eqeqe','siva','2022-10-20 17:57:33',NULL,NULL);
/*!40000 ALTER TABLE `brand001mb` ENABLE KEYS */;


--
-- Definition of table `budget001hb`
--

DROP TABLE IF EXISTS `budget001hb`;
CREATE TABLE `budget001hb` (
  `bgId` int(11) NOT NULL AUTO_INCREMENT,
  `budgetName` varchar(50) NOT NULL,
  `docStatus` varchar(50) NOT NULL,
  `centerName` varchar(50) NOT NULL,
  `actifannualbgexceed` varchar(50) NOT NULL,
  `actifmonthbgexceed` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `bgaccountType` varchar(60) NOT NULL,
  `bgAmount` decimal(12,4) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bgId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budget001hb`
--

/*!40000 ALTER TABLE `budget001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `budget001hb` ENABLE KEYS */;


--
-- Definition of table `budget001mb`
--

DROP TABLE IF EXISTS `budget001mb`;
CREATE TABLE `budget001mb` (
  `bgId` int(11) NOT NULL AUTO_INCREMENT,
  `budgetName` varchar(50) NOT NULL,
  `docStatus` varchar(50) NOT NULL,
  `centerName` varchar(50) NOT NULL,
  `actifannualbgexceed` varchar(50) NOT NULL,
  `actifmonthbgexceed` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `bgaccountType` varchar(60) NOT NULL,
  `bgAmount` decimal(12,4) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bgId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budget001mb`
--

/*!40000 ALTER TABLE `budget001mb` DISABLE KEYS */;
INSERT INTO `budget001mb` (`bgId`,`budgetName`,`docStatus`,`centerName`,`actifannualbgexceed`,`actifmonthbgexceed`,`company`,`bgaccountType`,`bgAmount`,`fiscalYear`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (13,'SHEIK','Dummy2','SHEIK MD','Stop','Dummy3','NANDALALA','Dummy2','6468.0000',2022,'sheik','2022-02-11 04:39:50','sheik','2022-02-11 04:40:05'),
 (14,'de','Dummy3','SHEIK MD','Ignore','Dummy1','wipro','Dummy3','34.0000',2023,'siva','2022-12-07 10:35:26',NULL,NULL);
/*!40000 ALTER TABLE `budget001mb` ENABLE KEYS */;


--
-- Definition of table `budgetaccounttype001hb`
--

DROP TABLE IF EXISTS `budgetaccounttype001hb`;
CREATE TABLE `budgetaccounttype001hb` (
  `bgaccId` int(11) NOT NULL AUTO_INCREMENT,
  `bgaccountType` varchar(60) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bgaccId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budgetaccounttype001hb`
--

/*!40000 ALTER TABLE `budgetaccounttype001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `budgetaccounttype001hb` ENABLE KEYS */;


--
-- Definition of table `budgetaccounttype001mb`
--

DROP TABLE IF EXISTS `budgetaccounttype001mb`;
CREATE TABLE `budgetaccounttype001mb` (
  `bgaccId` int(11) NOT NULL AUTO_INCREMENT,
  `bgaccountType` varchar(60) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bgaccId`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budgetaccounttype001mb`
--

/*!40000 ALTER TABLE `budgetaccounttype001mb` DISABLE KEYS */;
INSERT INTO `budgetaccounttype001mb` (`bgaccId`,`bgaccountType`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (18,'SEKAR','sheik','2022-02-11 04:39:02','sheik','2022-02-11 04:39:10'),
 (19,'thiru','siva','2022-10-20 15:41:52',NULL,NULL);
/*!40000 ALTER TABLE `budgetaccounttype001mb` ENABLE KEYS */;


--
-- Definition of table `budgetmonthdist001hb`
--

DROP TABLE IF EXISTS `budgetmonthdist001hb`;
CREATE TABLE `budgetmonthdist001hb` (
  `bmdId` int(11) NOT NULL AUTO_INCREMENT,
  `distName` varchar(50) NOT NULL,
  `respMonth` varchar(50) NOT NULL,
  `percentAllocate` decimal(12,4) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bmdId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budgetmonthdist001hb`
--

/*!40000 ALTER TABLE `budgetmonthdist001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `budgetmonthdist001hb` ENABLE KEYS */;


--
-- Definition of table `budgetmonthdist001mb`
--

DROP TABLE IF EXISTS `budgetmonthdist001mb`;
CREATE TABLE `budgetmonthdist001mb` (
  `bmdId` int(11) NOT NULL AUTO_INCREMENT,
  `distName` varchar(50) NOT NULL,
  `respMonth` varchar(50) NOT NULL,
  `percentAllocate` decimal(12,4) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`bmdId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budgetmonthdist001mb`
--

/*!40000 ALTER TABLE `budgetmonthdist001mb` DISABLE KEYS */;
INSERT INTO `budgetmonthdist001mb` (`bmdId`,`distName`,`respMonth`,`percentAllocate`,`fiscalYear`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (5,'GFH','January','4546.0000',2021,'sheik','2022-02-11 04:40:35','sheik','2022-02-11 04:40:54'),
 (6,'tret','May','535436.0000',2021,'siva','2022-10-20 15:42:36',NULL,NULL);
/*!40000 ALTER TABLE `budgetmonthdist001mb` ENABLE KEYS */;


--
-- Definition of table `budgetvarreport001hb`
--

DROP TABLE IF EXISTS `budgetvarreport001hb`;
CREATE TABLE `budgetvarreport001hb` (
  `varId` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(50) NOT NULL,
  `company` varchar(60) NOT NULL,
  `centerName` varchar(60) NOT NULL,
  `bgaccountType` varchar(60) NOT NULL,
  `actualjan` decimal(12,4) DEFAULT NULL,
  `variancejan` decimal(12,4) DEFAULT NULL,
  `targetjan` decimal(12,4) DEFAULT NULL,
  `actualfeb` decimal(12,4) DEFAULT NULL,
  `variancefeb` decimal(12,4) DEFAULT NULL,
  `targetfeb` decimal(12,4) DEFAULT NULL,
  `actualmar` decimal(12,4) DEFAULT NULL,
  `variancemar` decimal(12,4) DEFAULT NULL,
  `targetmar` decimal(12,4) DEFAULT NULL,
  `actualapr` decimal(12,4) DEFAULT NULL,
  `varianceapr` decimal(12,4) DEFAULT NULL,
  `targetapr` decimal(12,4) DEFAULT NULL,
  `actualmay` decimal(12,4) DEFAULT NULL,
  `variancemay` decimal(12,4) DEFAULT NULL,
  `targetmay` decimal(12,4) DEFAULT NULL,
  `actualjun` decimal(12,4) DEFAULT NULL,
  `variancejun` decimal(12,4) DEFAULT NULL,
  `targetjun` decimal(12,4) DEFAULT NULL,
  `actualjul` decimal(12,4) DEFAULT NULL,
  `variancejul` decimal(12,4) DEFAULT NULL,
  `targetjul` decimal(12,4) DEFAULT NULL,
  `actualaug` decimal(12,4) DEFAULT NULL,
  `varianceaug` decimal(12,4) DEFAULT NULL,
  `targetaug` decimal(12,4) DEFAULT NULL,
  `actualsep` decimal(12,4) DEFAULT NULL,
  `variancesep` decimal(12,4) DEFAULT NULL,
  `targetsep` decimal(12,4) DEFAULT NULL,
  `actualoct` decimal(12,4) DEFAULT NULL,
  `varianceoct` decimal(12,4) DEFAULT NULL,
  `targetoct` decimal(12,4) DEFAULT NULL,
  `actualnov` decimal(12,4) DEFAULT NULL,
  `variancenov` decimal(12,4) DEFAULT NULL,
  `targetnov` decimal(12,4) DEFAULT NULL,
  `actualdec` decimal(12,4) DEFAULT NULL,
  `variancedec` decimal(12,4) DEFAULT NULL,
  `targetdec` decimal(12,4) DEFAULT NULL,
  `totalTarget` decimal(12,4) DEFAULT NULL,
  `totalActual` decimal(12,4) DEFAULT NULL,
  `totalVariance` decimal(12,4) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`varId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budgetvarreport001hb`
--

/*!40000 ALTER TABLE `budgetvarreport001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `budgetvarreport001hb` ENABLE KEYS */;


--
-- Definition of table `budgetvarreport001mb`
--

DROP TABLE IF EXISTS `budgetvarreport001mb`;
CREATE TABLE `budgetvarreport001mb` (
  `varId` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(50) NOT NULL,
  `company` varchar(60) NOT NULL,
  `centerName` varchar(60) NOT NULL,
  `bgaccountType` varchar(60) NOT NULL,
  `actualjan` decimal(12,4) DEFAULT NULL,
  `variancejan` decimal(12,4) DEFAULT NULL,
  `targetjan` decimal(12,4) DEFAULT NULL,
  `actualfeb` decimal(12,4) DEFAULT NULL,
  `variancefeb` decimal(12,4) DEFAULT NULL,
  `targetfeb` decimal(12,4) DEFAULT NULL,
  `actualmar` decimal(12,4) DEFAULT NULL,
  `variancemar` decimal(12,4) DEFAULT NULL,
  `targetmar` decimal(12,4) DEFAULT NULL,
  `actualapr` decimal(12,4) DEFAULT NULL,
  `varianceapr` decimal(12,4) DEFAULT NULL,
  `targetapr` decimal(12,4) DEFAULT NULL,
  `actualmay` decimal(12,4) DEFAULT NULL,
  `variancemay` decimal(12,4) DEFAULT NULL,
  `targetmay` decimal(12,4) DEFAULT NULL,
  `actualjun` decimal(12,4) DEFAULT NULL,
  `variancejun` decimal(12,4) DEFAULT NULL,
  `targetjun` decimal(12,4) DEFAULT NULL,
  `actualjul` decimal(12,4) DEFAULT NULL,
  `variancejul` decimal(12,4) DEFAULT NULL,
  `targetjul` decimal(12,4) DEFAULT NULL,
  `actualaug` decimal(12,4) DEFAULT NULL,
  `varianceaug` decimal(12,4) DEFAULT NULL,
  `targetaug` decimal(12,4) DEFAULT NULL,
  `actualsep` decimal(12,4) DEFAULT NULL,
  `variancesep` decimal(12,4) DEFAULT NULL,
  `targetsep` decimal(12,4) DEFAULT NULL,
  `actualoct` decimal(12,4) DEFAULT NULL,
  `varianceoct` decimal(12,4) DEFAULT NULL,
  `targetoct` decimal(12,4) DEFAULT NULL,
  `actualnov` decimal(12,4) DEFAULT NULL,
  `variancenov` decimal(12,4) DEFAULT NULL,
  `targetnov` decimal(12,4) DEFAULT NULL,
  `actualdec` decimal(12,4) DEFAULT NULL,
  `variancedec` decimal(12,4) DEFAULT NULL,
  `targetdec` decimal(12,4) DEFAULT NULL,
  `totalTarget` decimal(12,4) DEFAULT NULL,
  `totalActual` decimal(12,4) DEFAULT NULL,
  `totalVariance` decimal(12,4) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`varId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `budgetvarreport001mb`
--

/*!40000 ALTER TABLE `budgetvarreport001mb` DISABLE KEYS */;
INSERT INTO `budgetvarreport001mb` (`varId`,`period`,`company`,`centerName`,`bgaccountType`,`actualjan`,`variancejan`,`targetjan`,`actualfeb`,`variancefeb`,`targetfeb`,`actualmar`,`variancemar`,`targetmar`,`actualapr`,`varianceapr`,`targetapr`,`actualmay`,`variancemay`,`targetmay`,`actualjun`,`variancejun`,`targetjun`,`actualjul`,`variancejul`,`targetjul`,`actualaug`,`varianceaug`,`targetaug`,`actualsep`,`variancesep`,`targetsep`,`actualoct`,`varianceoct`,`targetoct`,`actualnov`,`variancenov`,`targetnov`,`actualdec`,`variancedec`,`targetdec`,`totalTarget`,`totalActual`,`totalVariance`,`fiscalYear`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (11,'Daily','NANDALALA','Dummy2','Dummy2','15.0000','21.0000','3.0000','6.0000','16.0000','15.0000','12.0000','21.0000','4.0000','6.0000','6.0000','5.0000','4.0000','5.0000','4.0000','5.0000','5.0000','7.0000','7.0000','7.0000','7.0000','7.0000','7.0000','5.0000','5.0000','5.0000','2.0000','2.0000','2.0000','6.0000','1.0000','1.0000','2.0000','3.0000','22.0000','22.0000','4.0000','8.0000','24.0000',2021,'sheik','2022-02-11 04:43:25','sheik','2022-02-11 04:43:56');
/*!40000 ALTER TABLE `budgetvarreport001mb` ENABLE KEYS */;


--
-- Definition of table `chequetemplate001hb`
--

DROP TABLE IF EXISTS `chequetemplate001hb`;
CREATE TABLE `chequetemplate001hb` (
  `cheqId` int(11) NOT NULL AUTO_INCREMENT,
  `prmaccountName` varchar(60) NOT NULL,
  `prmcheqSize` decimal(12,4) DEFAULT NULL,
  `prmdistfromTop` decimal(12,4) DEFAULT NULL,
  `prmcheqWidth` decimal(12,4) DEFAULT NULL,
  `prmdistfromLeft` decimal(12,4) DEFAULT NULL,
  `prmcheqHeight` decimal(12,4) DEFAULT NULL,
  `prmmesgtoShow` varchar(100) NOT NULL,
  `dtdistfromTop` decimal(12,4) DEFAULT NULL,
  `dtdistfromLeft` decimal(12,4) DEFAULT NULL,
  `paydistfromTop` decimal(12,4) DEFAULT NULL,
  `paydistfromLeft` decimal(12,4) DEFAULT NULL,
  `amtwdistfromTop` decimal(12,4) DEFAULT NULL,
  `amtwdistfromLeft` decimal(12,4) DEFAULT NULL,
  `amtwWidth` decimal(12,4) DEFAULT NULL,
  `amtwlineSpace` decimal(12,4) DEFAULT NULL,
  `amtfdistfromTop` decimal(12,4) DEFAULT NULL,
  `amtfdistfromLeft` decimal(12,4) DEFAULT NULL,
  `accnodistfromTop` decimal(12,4) DEFAULT NULL,
  `accnodistfromLeft` decimal(12,4) DEFAULT NULL,
  `signposdistfromTop` decimal(12,4) DEFAULT NULL,
  `signposdistfromLeft` decimal(12,4) DEFAULT NULL,
  `prmisaccPay` char(1) DEFAULT NULL,
  `scanCheq` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`cheqId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chequetemplate001hb`
--

/*!40000 ALTER TABLE `chequetemplate001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `chequetemplate001hb` ENABLE KEYS */;


--
-- Definition of table `chequetemplate001mb`
--

DROP TABLE IF EXISTS `chequetemplate001mb`;
CREATE TABLE `chequetemplate001mb` (
  `cheqId` int(11) NOT NULL AUTO_INCREMENT,
  `prmaccountName` varchar(60) NOT NULL,
  `prmcheqSize` decimal(12,4) DEFAULT NULL,
  `prmdistfromTop` decimal(12,4) DEFAULT NULL,
  `prmcheqWidth` decimal(12,4) DEFAULT NULL,
  `prmdistfromLeft` decimal(12,4) DEFAULT NULL,
  `prmcheqHeight` decimal(12,4) DEFAULT NULL,
  `prmmesgtoShow` varchar(100) NOT NULL,
  `dtdistfromTop` decimal(12,4) DEFAULT NULL,
  `dtdistfromLeft` decimal(12,4) DEFAULT NULL,
  `paydistfromTop` decimal(12,4) DEFAULT NULL,
  `paydistfromLeft` decimal(12,4) DEFAULT NULL,
  `amtwdistfromTop` decimal(12,4) DEFAULT NULL,
  `amtwdistfromLeft` decimal(12,4) DEFAULT NULL,
  `amtwWidth` decimal(12,4) DEFAULT NULL,
  `amtwlineSpace` decimal(12,4) DEFAULT NULL,
  `amtfdistfromTop` decimal(12,4) DEFAULT NULL,
  `amtfdistfromLeft` decimal(12,4) DEFAULT NULL,
  `accnodistfromTop` decimal(12,4) DEFAULT NULL,
  `accnodistfromLeft` decimal(12,4) DEFAULT NULL,
  `signposdistfromTop` decimal(12,4) DEFAULT NULL,
  `signposdistfromLeft` decimal(12,4) DEFAULT NULL,
  `prmisaccPay` char(1) DEFAULT NULL,
  `scanCheq` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`cheqId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chequetemplate001mb`
--

/*!40000 ALTER TABLE `chequetemplate001mb` DISABLE KEYS */;
INSERT INTO `chequetemplate001mb` (`cheqId`,`prmaccountName`,`prmcheqSize`,`prmdistfromTop`,`prmcheqWidth`,`prmdistfromLeft`,`prmcheqHeight`,`prmmesgtoShow`,`dtdistfromTop`,`dtdistfromLeft`,`paydistfromTop`,`paydistfromLeft`,`amtwdistfromTop`,`amtwdistfromLeft`,`amtwWidth`,`amtwlineSpace`,`amtfdistfromTop`,`amtfdistfromLeft`,`accnodistfromTop`,`accnodistfromLeft`,`signposdistfromTop`,`signposdistfromLeft`,`prmisaccPay`,`scanCheq`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (23,'Sales','12.0000','51.0000','14.0000','15.0000','10.0000','GOOD','4.0000','5.0000','4.0000','2.0000','1.0000','2.0000','8.0000','9.0000','5.0000','8.0000','4.0000','5.0000','9.0000','99.0000','1','2.0000','sheik','2022-02-11 05:13:55','sheik','2022-02-11 05:14:42');
/*!40000 ALTER TABLE `chequetemplate001mb` ENABLE KEYS */;


--
-- Definition of table `communication001hb`
--

DROP TABLE IF EXISTS `communication001hb`;
CREATE TABLE `communication001hb` (
  `commId` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(50) NOT NULL,
  `status` varchar(20) DEFAULT NULL,
  `sentrec` varchar(20) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`commId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `communication001hb`
--

/*!40000 ALTER TABLE `communication001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `communication001hb` ENABLE KEYS */;


--
-- Definition of table `communication001mb`
--

DROP TABLE IF EXISTS `communication001mb`;
CREATE TABLE `communication001mb` (
  `commId` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(50) NOT NULL,
  `status` varchar(20) DEFAULT NULL,
  `sentrec` varchar(20) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`commId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `communication001mb`
--

/*!40000 ALTER TABLE `communication001mb` DISABLE KEYS */;
INSERT INTO `communication001mb` (`commId`,`subject`,`status`,`sentrec`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (9,'PHICHYS','Open','Sent','sheik','2022-02-11 10:13:39','sheik','2022-02-11 10:13:45'),
 (10,'Computer','Open','Sent','siva','2022-10-20 16:28:36',NULL,NULL);
/*!40000 ALTER TABLE `communication001mb` ENABLE KEYS */;


--
-- Definition of table `companyaccount001hb`
--

DROP TABLE IF EXISTS `companyaccount001hb`;
CREATE TABLE `companyaccount001hb` (
  `caId` int(11) NOT NULL AUTO_INCREMENT,
  `companyName` varchar(100) NOT NULL,
  `country` varchar(60) NOT NULL,
  `abbreviation` varchar(50) NOT NULL,
  `companyDomain` varchar(60) NOT NULL,
  `defholList` varchar(50) NOT NULL,
  `defCurrency` varchar(50) NOT NULL,
  `accchartType` varchar(50) NOT NULL,
  `defbankAccount` varchar(50) NOT NULL,
  `defcashAccount` varchar(50) NOT NULL,
  `defpayAccount` varchar(50) NOT NULL,
  `defincomeAccount` varchar(50) NOT NULL,
  `rndoffCenter` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`caId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companyaccount001hb`
--

/*!40000 ALTER TABLE `companyaccount001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `companyaccount001hb` ENABLE KEYS */;


--
-- Definition of table `companyaccount001mb`
--

DROP TABLE IF EXISTS `companyaccount001mb`;
CREATE TABLE `companyaccount001mb` (
  `caId` int(11) NOT NULL AUTO_INCREMENT,
  `companyName` varchar(100) NOT NULL,
  `country` varchar(60) NOT NULL,
  `abbreviation` varchar(50) NOT NULL,
  `companyDomain` varchar(60) NOT NULL,
  `defholList` varchar(50) NOT NULL,
  `defCurrency` varchar(50) NOT NULL,
  `accchartType` varchar(50) NOT NULL,
  `defbankAccount` varchar(50) NOT NULL,
  `defcashAccount` varchar(50) NOT NULL,
  `defpayAccount` varchar(50) NOT NULL,
  `defincomeAccount` varchar(50) NOT NULL,
  `rndoffCenter` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`caId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companyaccount001mb`
--

/*!40000 ALTER TABLE `companyaccount001mb` DISABLE KEYS */;
INSERT INTO `companyaccount001mb` (`caId`,`companyName`,`country`,`abbreviation`,`companyDomain`,`defholList`,`defCurrency`,`accchartType`,`defbankAccount`,`defcashAccount`,`defpayAccount`,`defincomeAccount`,`rndoffCenter`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (17,'NANDALALA','INDIA','GHFDGAUDF','Manufacturing','Dummy2','INR','Customized','Freight and Forwarding','Cash','Changes','Freight and Forwarding','54465','latha','2022-02-10 00:46:43','latha','2022-02-10 00:46:52');
/*!40000 ALTER TABLE `companyaccount001mb` ENABLE KEYS */;


--
-- Definition of table `compprodorder001hb`
--

DROP TABLE IF EXISTS `compprodorder001hb`;
CREATE TABLE `compprodorder001hb` (
  `prodId` int(11) NOT NULL AUTO_INCREMENT,
  `prorderCode` varchar(30) NOT NULL,
  `itemtoManufacture` varchar(40) NOT NULL,
  `toProduce` varchar(30) DEFAULT NULL,
  `produced` varchar(30) NOT NULL,
  `empCompany` varchar(30) NOT NULL,
  `date` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prodId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `compprodorder001hb`
--

/*!40000 ALTER TABLE `compprodorder001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `compprodorder001hb` ENABLE KEYS */;


--
-- Definition of table `compprodorder001mb`
--

DROP TABLE IF EXISTS `compprodorder001mb`;
CREATE TABLE `compprodorder001mb` (
  `prodId` int(11) NOT NULL AUTO_INCREMENT,
  `prorderCode` varchar(30) NOT NULL,
  `itemtoManufacture` varchar(40) NOT NULL,
  `toProduce` varchar(30) DEFAULT NULL,
  `produced` varchar(30) NOT NULL,
  `empCompany` varchar(30) NOT NULL,
  `date` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prodId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `compprodorder001mb`
--

/*!40000 ALTER TABLE `compprodorder001mb` DISABLE KEYS */;
INSERT INTO `compprodorder001mb` (`prodId`,`prorderCode`,`itemtoManufacture`,`toProduce`,`produced`,`empCompany`,`date`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (21,'Dummy1','Dummy2','sf','sss','sf','2021-08-14 00:00:00','','0000-00-00 00:00:00',NULL,NULL),
 (22,'Dummy2','Dummy2','ert','et','wer','2021-09-17 00:00:00','insertuser','2021-09-01 15:19:57',NULL,NULL),
 (23,'Dummy2','Dummy3','SMK','SHEIK','NANDALALA INFOTECH','2022-02-23 18:30:00','latha','2022-02-09 23:30:34','latha','2022-02-09 23:30:46');
/*!40000 ALTER TABLE `compprodorder001mb` ENABLE KEYS */;


--
-- Definition of table `costcenter001hb`
--

DROP TABLE IF EXISTS `costcenter001hb`;
CREATE TABLE `costcenter001hb` (
  `centId` int(11) NOT NULL AUTO_INCREMENT,
  `centerName` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`centId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `costcenter001hb`
--

/*!40000 ALTER TABLE `costcenter001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `costcenter001hb` ENABLE KEYS */;


--
-- Definition of table `costcenter001mb`
--

DROP TABLE IF EXISTS `costcenter001mb`;
CREATE TABLE `costcenter001mb` (
  `centId` int(11) NOT NULL AUTO_INCREMENT,
  `centerName` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`centId`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `costcenter001mb`
--

/*!40000 ALTER TABLE `costcenter001mb` DISABLE KEYS */;
INSERT INTO `costcenter001mb` (`centId`,`centerName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (26,'SHEIK MD','sheik','2022-02-11 04:38:24','sheik','2022-02-11 04:38:30'),
 (27,'dd','siva','2022-12-07 10:33:55',NULL,NULL);
/*!40000 ALTER TABLE `costcenter001mb` ENABLE KEYS */;


--
-- Definition of table `creditcontrol001hb`
--

DROP TABLE IF EXISTS `creditcontrol001hb`;
CREATE TABLE `creditcontrol001hb` (
  `credId` int(11) NOT NULL AUTO_INCREMENT,
  `creditName` varchar(60) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`credId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `creditcontrol001hb`
--

/*!40000 ALTER TABLE `creditcontrol001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `creditcontrol001hb` ENABLE KEYS */;


--
-- Definition of table `creditcontrol001mb`
--

DROP TABLE IF EXISTS `creditcontrol001mb`;
CREATE TABLE `creditcontrol001mb` (
  `credId` int(11) NOT NULL AUTO_INCREMENT,
  `creditName` varchar(60) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`credId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `creditcontrol001mb`
--

/*!40000 ALTER TABLE `creditcontrol001mb` DISABLE KEYS */;
INSERT INTO `creditcontrol001mb` (`credId`,`creditName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'Analytics','','0000-00-00 00:00:00',NULL,NULL),
 (2,'Student','','0000-00-00 00:00:00',NULL,NULL),
 (3,'Customer','','0000-00-00 00:00:00',NULL,NULL),
 (4,'Supplier','','0000-00-00 00:00:00',NULL,NULL),
 (5,'Support Team','','0000-00-00 00:00:00',NULL,NULL),
 (6,'Leave Appreover','','0000-00-00 00:00:00',NULL,NULL),
 (7,'Expense Approver','','0000-00-00 00:00:00',NULL,NULL),
 (8,'HR Manager','','0000-00-00 00:00:00',NULL,NULL),
 (9,'Item Manager','','0000-00-00 00:00:00',NULL,NULL),
 (10,'Maintainance Manager','','0000-00-00 00:00:00',NULL,NULL),
 (11,'Project User','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `creditcontrol001mb` ENABLE KEYS */;


--
-- Definition of table `crmmintoresp001hb`
--

DROP TABLE IF EXISTS `crmmintoresp001hb`;
CREATE TABLE `crmmintoresp001hb` (
  `mrpId` int(11) NOT NULL AUTO_INCREMENT,
  `mintoresp` varchar(20) NOT NULL,
  `date` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`mrpId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmmintoresp001hb`
--

/*!40000 ALTER TABLE `crmmintoresp001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `crmmintoresp001hb` ENABLE KEYS */;


--
-- Definition of table `crmmintoresp001mb`
--

DROP TABLE IF EXISTS `crmmintoresp001mb`;
CREATE TABLE `crmmintoresp001mb` (
  `mrpId` int(11) NOT NULL AUTO_INCREMENT,
  `mintoresp` varchar(20) NOT NULL,
  `date` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`mrpId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmmintoresp001mb`
--

/*!40000 ALTER TABLE `crmmintoresp001mb` DISABLE KEYS */;
INSERT INTO `crmmintoresp001mb` (`mrpId`,`mintoresp`,`date`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (2,'10','0000-00-00 00:00:00','','0000-00-00 00:00:00',NULL,NULL),
 (3,'20','0000-00-00 00:00:00','','0000-00-00 00:00:00',NULL,NULL),
 (8,'35','0000-00-00 00:00:00','','0000-00-00 00:00:00',NULL,NULL),
 (9,'sdgvs','0000-00-00 00:00:00','','0000-00-00 00:00:00',NULL,NULL),
 (10,'','0000-00-00 00:00:00','','0000-00-00 00:00:00',NULL,NULL),
 (12,'','0000-00-00 00:00:00','','0000-00-00 00:00:00',NULL,NULL),
 (14,'','0000-00-00 00:00:00','','0000-00-00 00:00:00',NULL,NULL),
 (15,'465','2022-02-15 18:30:00','sheik','2022-02-11 10:02:30',NULL,NULL),
 (16,'42','2022-10-13 00:00:00','siva','2022-10-20 16:26:58',NULL,NULL),
 (17,'32','2022-10-10 00:00:00','siva','2022-10-20 16:27:17',NULL,NULL);
/*!40000 ALTER TABLE `crmmintoresp001mb` ENABLE KEYS */;


--
-- Definition of table `crmspcontact001hb`
--

DROP TABLE IF EXISTS `crmspcontact001hb`;
CREATE TABLE `crmspcontact001hb` (
  `contId` int(11) NOT NULL AUTO_INCREMENT,
  `leadName` varchar(50) NOT NULL,
  `status` varchar(40) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`contId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmspcontact001hb`
--

/*!40000 ALTER TABLE `crmspcontact001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `crmspcontact001hb` ENABLE KEYS */;


--
-- Definition of table `crmspcontact001mb`
--

DROP TABLE IF EXISTS `crmspcontact001mb`;
CREATE TABLE `crmspcontact001mb` (
  `contId` int(11) NOT NULL AUTO_INCREMENT,
  `leadName` varchar(50) NOT NULL,
  `status` varchar(40) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`contId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmspcontact001mb`
--

/*!40000 ALTER TABLE `crmspcontact001mb` DISABLE KEYS */;
INSERT INTO `crmspcontact001mb` (`contId`,`leadName`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (9,'SHEIK','Passive','sheik','2022-02-11 09:55:33','sheik','2022-02-11 09:55:46'),
 (10,'raj','Open','siva','2022-10-20 17:31:04',NULL,NULL),
 (11,'vasi','Replied','siva','2022-10-20 17:31:28',NULL,NULL),
 (12,'vasi','Replied','siva','2022-10-20 17:31:38',NULL,NULL);
/*!40000 ALTER TABLE `crmspcontact001mb` ENABLE KEYS */;


--
-- Definition of table `crmspcust001hb`
--

DROP TABLE IF EXISTS `crmspcust001hb`;
CREATE TABLE `crmspcust001hb` (
  `custId` int(11) NOT NULL AUTO_INCREMENT,
  `customername` varchar(50) NOT NULL,
  `status` varchar(30) DEFAULT NULL,
  `customergroup` varchar(50) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`custId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmspcust001hb`
--

/*!40000 ALTER TABLE `crmspcust001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `crmspcust001hb` ENABLE KEYS */;


--
-- Definition of table `crmspcust001mb`
--

DROP TABLE IF EXISTS `crmspcust001mb`;
CREATE TABLE `crmspcust001mb` (
  `custId` int(11) NOT NULL AUTO_INCREMENT,
  `customername` varchar(50) NOT NULL,
  `status` varchar(30) DEFAULT NULL,
  `customergroup` varchar(50) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`custId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmspcust001mb`
--

/*!40000 ALTER TABLE `crmspcust001mb` DISABLE KEYS */;
INSERT INTO `crmspcust001mb` (`custId`,`customername`,`status`,`customergroup`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (10,'Dummy2','Open','Dummy1','sheik','2022-02-11 09:55:53','sheik','2022-02-11 09:56:00');
/*!40000 ALTER TABLE `crmspcust001mb` ENABLE KEYS */;


--
-- Definition of table `crmsplead001hb`
--

DROP TABLE IF EXISTS `crmsplead001hb`;
CREATE TABLE `crmsplead001hb` (
  `slineId` int(11) NOT NULL AUTO_INCREMENT,
  `personName` varchar(50) NOT NULL,
  `orgName` varchar(50) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`slineId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmsplead001hb`
--

/*!40000 ALTER TABLE `crmsplead001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `crmsplead001hb` ENABLE KEYS */;


--
-- Definition of table `crmsplead001mb`
--

DROP TABLE IF EXISTS `crmsplead001mb`;
CREATE TABLE `crmsplead001mb` (
  `slineId` int(11) NOT NULL AUTO_INCREMENT,
  `personName` varchar(50) NOT NULL,
  `orgName` varchar(50) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`slineId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmsplead001mb`
--

/*!40000 ALTER TABLE `crmsplead001mb` DISABLE KEYS */;
INSERT INTO `crmsplead001mb` (`slineId`,`personName`,`orgName`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (12,'SHEIK','NANDALALA','Open','sheik','2022-02-11 09:55:11','sheik','2022-02-11 09:55:23');
/*!40000 ALTER TABLE `crmsplead001mb` ENABLE KEYS */;


--
-- Definition of table `crmspoppo001hb`
--

DROP TABLE IF EXISTS `crmspoppo001hb`;
CREATE TABLE `crmspoppo001hb` (
  `oppId` int(11) NOT NULL AUTO_INCREMENT,
  `oppSeries` varchar(50) NOT NULL,
  `oppType` varchar(40) DEFAULT NULL,
  `oppFrom` varchar(40) DEFAULT NULL,
  `status` varchar(40) DEFAULT NULL,
  `withitems` char(1) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`oppId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmspoppo001hb`
--

/*!40000 ALTER TABLE `crmspoppo001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `crmspoppo001hb` ENABLE KEYS */;


--
-- Definition of table `crmspoppo001mb`
--

DROP TABLE IF EXISTS `crmspoppo001mb`;
CREATE TABLE `crmspoppo001mb` (
  `oppId` int(11) NOT NULL AUTO_INCREMENT,
  `oppSeries` varchar(50) NOT NULL,
  `oppType` varchar(40) DEFAULT NULL,
  `oppFrom` varchar(40) DEFAULT NULL,
  `status` varchar(40) DEFAULT NULL,
  `withitems` char(1) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`oppId`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crmspoppo001mb`
--

/*!40000 ALTER TABLE `crmspoppo001mb` DISABLE KEYS */;
INSERT INTO `crmspoppo001mb` (`oppId`,`oppSeries`,`oppType`,`oppFrom`,`status`,`withitems`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (22,'SHEIK','Sales','Lead','Quotation','1','sheik','2022-02-11 09:56:13','sheik','2022-02-11 09:56:29');
/*!40000 ALTER TABLE `crmspoppo001mb` ENABLE KEYS */;


--
-- Definition of table `currency001hb`
--

DROP TABLE IF EXISTS `currency001hb`;
CREATE TABLE `currency001hb` (
  `currId` int(11) NOT NULL AUTO_INCREMENT,
  `currencyName` varchar(30) NOT NULL,
  `currencyAbbr` varchar(60) DEFAULT NULL,
  `fractionName` varchar(40) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`currId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `currency001hb`
--

/*!40000 ALTER TABLE `currency001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `currency001hb` ENABLE KEYS */;


--
-- Definition of table `currency001mb`
--

DROP TABLE IF EXISTS `currency001mb`;
CREATE TABLE `currency001mb` (
  `currId` int(11) NOT NULL AUTO_INCREMENT,
  `currencyName` varchar(30) NOT NULL,
  `currencyAbbr` varchar(60) DEFAULT NULL,
  `fractionName` varchar(40) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`currId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `currency001mb`
--

/*!40000 ALTER TABLE `currency001mb` DISABLE KEYS */;
INSERT INTO `currency001mb` (`currId`,`currencyName`,`currencyAbbr`,`fractionName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'USD','United States Dollar','Cent','','0000-00-00 00:00:00',NULL,NULL),
 (2,'INR','Indian Rupee','Paisa','','0000-00-00 00:00:00',NULL,NULL),
 (3,'CHF','Confoederatio Helvetica Franc','Rappen','','0000-00-00 00:00:00',NULL,NULL),
 (4,'CNY','','','','0000-00-00 00:00:00',NULL,NULL),
 (5,'JPY','Japanese Yen','Sen[G]','','0000-00-00 00:00:00',NULL,NULL),
 (6,'AUD','Australian Dollar','Cent','','0000-00-00 00:00:00',NULL,NULL),
 (7,'AED','United Arab Emirates Dirham','Fils','','0000-00-00 00:00:00',NULL,NULL),
 (8,'EUR','euro ','Cent','','0000-00-00 00:00:00',NULL,NULL),
 (9,'GBP','Great Britain Pound','Penny','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `currency001mb` ENABLE KEYS */;


--
-- Definition of table `currencyexchange001hb`
--

DROP TABLE IF EXISTS `currencyexchange001hb`;
CREATE TABLE `currencyexchange001hb` (
  `cuexId` int(11) NOT NULL AUTO_INCREMENT,
  `cuexName` varchar(50) NOT NULL,
  `fromCurrency` int(10) NOT NULL,
  `toCurrency` int(10) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`cuexId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `currencyexchange001hb`
--

/*!40000 ALTER TABLE `currencyexchange001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `currencyexchange001hb` ENABLE KEYS */;


--
-- Definition of table `currencyexchange001mb`
--

DROP TABLE IF EXISTS `currencyexchange001mb`;
CREATE TABLE `currencyexchange001mb` (
  `cuexId` int(11) NOT NULL AUTO_INCREMENT,
  `cuexName` varchar(50) NOT NULL,
  `fromCurrency` int(10) NOT NULL,
  `toCurrency` int(10) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`cuexId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `currencyexchange001mb`
--

/*!40000 ALTER TABLE `currencyexchange001mb` DISABLE KEYS */;
INSERT INTO `currencyexchange001mb` (`cuexId`,`cuexName`,`fromCurrency`,`toCurrency`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'CNY-USD',0,0,'','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `currencyexchange001mb` ENABLE KEYS */;


--
-- Definition of table `customeracquisition001hb`
--

DROP TABLE IF EXISTS `customeracquisition001hb`;
CREATE TABLE `customeracquisition001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `month` varchar(45) NOT NULL,
  `newcustomers` int(10) unsigned NOT NULL,
  `repeatcustomers` int(10) unsigned NOT NULL,
  `total` int(10) unsigned NOT NULL,
  `year` year(4) NOT NULL,
  `newcustomersrevenue` int(11) NOT NULL,
  `repeatcustomersrevenue` int(11) NOT NULL,
  `totalrevenue` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customeracquisition001hb`
--

/*!40000 ALTER TABLE `customeracquisition001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `customeracquisition001hb` ENABLE KEYS */;


--
-- Definition of table `customeracquisition001mb`
--

DROP TABLE IF EXISTS `customeracquisition001mb`;
CREATE TABLE `customeracquisition001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `month` varchar(45) NOT NULL,
  `newcustomers` int(10) unsigned NOT NULL,
  `repeatcustomers` int(10) unsigned NOT NULL,
  `total` int(10) unsigned NOT NULL,
  `year` year(4) NOT NULL,
  `newcustomersrevenue` int(11) NOT NULL,
  `repeatcustomersrevenue` int(11) NOT NULL,
  `totalrevenue` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customeracquisition001mb`
--

/*!40000 ALTER TABLE `customeracquisition001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `customeracquisition001mb` ENABLE KEYS */;


--
-- Definition of table `customercreditbalance001hb`
--

DROP TABLE IF EXISTS `customercreditbalance001hb`;
CREATE TABLE `customercreditbalance001hb` (
  `ccid` int(11) NOT NULL AUTO_INCREMENT,
  `customer` varchar(45) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `Customername` varchar(40) DEFAULT NULL,
  `creditlimit` mediumtext NOT NULL,
  `outstandingamount` mediumtext NOT NULL,
  `creditbalance` mediumtext NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ccid`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customercreditbalance001hb`
--

/*!40000 ALTER TABLE `customercreditbalance001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `customercreditbalance001hb` ENABLE KEYS */;


--
-- Definition of table `customercreditbalance001mb`
--

DROP TABLE IF EXISTS `customercreditbalance001mb`;
CREATE TABLE `customercreditbalance001mb` (
  `ccid` int(11) NOT NULL AUTO_INCREMENT,
  `customer` varchar(45) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `Customername` varchar(40) DEFAULT NULL,
  `creditlimit` mediumtext NOT NULL,
  `outstandingamount` mediumtext NOT NULL,
  `creditbalance` mediumtext NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ccid`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customercreditbalance001mb`
--

/*!40000 ALTER TABLE `customercreditbalance001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `customercreditbalance001mb` ENABLE KEYS */;


--
-- Definition of table `customerdetails001hb`
--

DROP TABLE IF EXISTS `customerdetails001hb`;
CREATE TABLE `customerdetails001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customerid` varchar(45) NOT NULL,
  `customername` varchar(45) NOT NULL,
  `customergroup` varchar(45) NOT NULL,
  `addressline1` varchar(45) NOT NULL,
  `addressline2` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `isprimaryaddress` tinyint(1) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `emailid` varchar(45) NOT NULL,
  `isprimarycontact` tinyint(4) NOT NULL,
  `postalcode` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `mobilenumber` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customerdetails001hb`
--

/*!40000 ALTER TABLE `customerdetails001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `customerdetails001hb` ENABLE KEYS */;


--
-- Definition of table `customerdetails001mb`
--

DROP TABLE IF EXISTS `customerdetails001mb`;
CREATE TABLE `customerdetails001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customerid` varchar(45) NOT NULL,
  `customername` varchar(45) NOT NULL,
  `customergroup` varchar(45) NOT NULL,
  `addressline1` varchar(45) NOT NULL,
  `addressline2` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `isprimaryaddress` tinyint(1) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `emailid` varchar(45) NOT NULL,
  `isprimarycontact` tinyint(4) NOT NULL,
  `postalcode` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `mobilenumber` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customerdetails001mb`
--

/*!40000 ALTER TABLE `customerdetails001mb` DISABLE KEYS */;
INSERT INTO `customerdetails001mb` (`id`,`customerid`,`customername`,`customergroup`,`addressline1`,`addressline2`,`city`,`state`,`country`,`isprimaryaddress`,`firstname`,`lastname`,`emailid`,`isprimarycontact`,`postalcode`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`,`phone`,`mobilenumber`) VALUES 
 (58,'54','SHEIK','Dummy1','JHFSDFGSFHLHFJSKFSHFBSJDFBSF','FFJHFHFBJHFJHFBJBF,AFAF','TRICHY','TAMILNADU','INDIA',0,'SHEIK','MOHAMMED','SHSUEBAK212@GAMIL.COM',0,621216,'sheik','2022-02-11 13:18:42','sheik','2022-02-11 13:18:47','9025762102','9444505243');
/*!40000 ALTER TABLE `customerdetails001mb` ENABLE KEYS */;


--
-- Definition of table `dailytimesheet001hb`
--

DROP TABLE IF EXISTS `dailytimesheet001hb`;
CREATE TABLE `dailytimesheet001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timesheet` varchar(45) NOT NULL,
  `employee` varchar(45) NOT NULL,
  `employeename` varchar(45) NOT NULL,
  `hours` varchar(50) NOT NULL,
  `activitytype` varchar(50) NOT NULL,
  `task` varchar(50) NOT NULL,
  `project` varchar(45) NOT NULL,
  `status` varchar(50) NOT NULL,
  `fromdatetime` datetime NOT NULL,
  `todatetime` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dailytimesheet001hb`
--

/*!40000 ALTER TABLE `dailytimesheet001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `dailytimesheet001hb` ENABLE KEYS */;


--
-- Definition of table `dailytimesheet001mb`
--

DROP TABLE IF EXISTS `dailytimesheet001mb`;
CREATE TABLE `dailytimesheet001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timesheet` varchar(45) NOT NULL,
  `employee` varchar(45) NOT NULL,
  `employeename` varchar(45) NOT NULL,
  `hours` varchar(50) NOT NULL,
  `activitytype` varchar(50) NOT NULL,
  `task` varchar(50) NOT NULL,
  `project` varchar(45) NOT NULL,
  `status` varchar(50) NOT NULL,
  `fromdatetime` datetime NOT NULL,
  `todatetime` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dailytimesheet001mb`
--

/*!40000 ALTER TABLE `dailytimesheet001mb` DISABLE KEYS */;
INSERT INTO `dailytimesheet001mb` (`id`,`timesheet`,`employee`,`employeename`,`hours`,`activitytype`,`task`,`project`,`status`,`fromdatetime`,`todatetime`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (6,'45478','Dummy2','Dummy2','25','2165','DASD','SHEIK','Initiated','2022-02-14 18:30:00','2022-02-21 18:30:00','sheik','2022-02-11 10:28:52','sheik','2022-02-11 10:29:02');
/*!40000 ALTER TABLE `dailytimesheet001mb` ENABLE KEYS */;


--
-- Definition of table `delnotetrends001hb`
--

DROP TABLE IF EXISTS `delnotetrends001hb`;
CREATE TABLE `delnotetrends001hb` (
  `dntrendId` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(50) NOT NULL,
  `basedOn` varchar(40) NOT NULL,
  `company` varchar(60) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `janQty` varchar(40) DEFAULT NULL,
  `janAmt` decimal(12,4) DEFAULT NULL,
  `febQty` varchar(40) DEFAULT NULL,
  `febAmt` decimal(12,4) DEFAULT NULL,
  `marQty` varchar(30) DEFAULT NULL,
  `marAmt` decimal(12,4) DEFAULT NULL,
  `aprQty` varchar(40) NOT NULL,
  `aprAmt` decimal(12,4) DEFAULT NULL,
  `mayQty` varchar(40) DEFAULT NULL,
  `mayAmt` decimal(12,4) DEFAULT NULL,
  `junQty` varchar(40) DEFAULT NULL,
  `junAmt` decimal(12,4) DEFAULT NULL,
  `julQty` varchar(40) DEFAULT NULL,
  `julAmt` decimal(12,4) DEFAULT NULL,
  `augQty` varchar(40) DEFAULT NULL,
  `augAmt` decimal(12,4) DEFAULT NULL,
  `sepQty` varchar(40) DEFAULT NULL,
  `sepAmt` decimal(12,4) DEFAULT NULL,
  `octQty` varchar(40) DEFAULT NULL,
  `octAmt` decimal(12,4) DEFAULT NULL,
  `novQty` varchar(40) DEFAULT NULL,
  `novAmt` decimal(12,4) DEFAULT NULL,
  `decQty` varchar(40) DEFAULT NULL,
  `decAmt` decimal(12,4) DEFAULT NULL,
  `totalQty` varchar(30) DEFAULT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  `augQtyt` varchar(255) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`dntrendId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `delnotetrends001hb`
--

/*!40000 ALTER TABLE `delnotetrends001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `delnotetrends001hb` ENABLE KEYS */;


--
-- Definition of table `delnotetrends001mb`
--

DROP TABLE IF EXISTS `delnotetrends001mb`;
CREATE TABLE `delnotetrends001mb` (
  `dntrendId` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(50) NOT NULL,
  `basedOn` varchar(40) NOT NULL,
  `company` varchar(60) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `janQty` varchar(40) DEFAULT NULL,
  `janAmt` decimal(12,4) DEFAULT NULL,
  `febQty` varchar(40) DEFAULT NULL,
  `febAmt` decimal(12,4) DEFAULT NULL,
  `marQty` varchar(30) DEFAULT NULL,
  `marAmt` decimal(12,4) DEFAULT NULL,
  `aprQty` varchar(40) NOT NULL,
  `aprAmt` decimal(12,4) DEFAULT NULL,
  `mayQty` varchar(40) DEFAULT NULL,
  `mayAmt` decimal(12,4) DEFAULT NULL,
  `junQty` varchar(40) DEFAULT NULL,
  `junAmt` decimal(12,4) DEFAULT NULL,
  `julQty` varchar(40) DEFAULT NULL,
  `julAmt` decimal(12,4) DEFAULT NULL,
  `augQty` varchar(40) DEFAULT NULL,
  `augAmt` decimal(12,4) DEFAULT NULL,
  `sepQty` varchar(40) DEFAULT NULL,
  `sepAmt` decimal(12,4) DEFAULT NULL,
  `octQty` varchar(40) DEFAULT NULL,
  `octAmt` decimal(12,4) DEFAULT NULL,
  `novQty` varchar(40) DEFAULT NULL,
  `novAmt` decimal(12,4) DEFAULT NULL,
  `decQty` varchar(40) DEFAULT NULL,
  `decAmt` decimal(12,4) DEFAULT NULL,
  `totalQty` varchar(30) DEFAULT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  `augQtyt` varchar(255) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`dntrendId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `delnotetrends001mb`
--

/*!40000 ALTER TABLE `delnotetrends001mb` DISABLE KEYS */;
INSERT INTO `delnotetrends001mb` (`dntrendId`,`period`,`basedOn`,`company`,`itemCode`,`janQty`,`janAmt`,`febQty`,`febAmt`,`marQty`,`marAmt`,`aprQty`,`aprAmt`,`mayQty`,`mayAmt`,`junQty`,`junAmt`,`julQty`,`julAmt`,`augQty`,`augAmt`,`sepQty`,`sepAmt`,`octQty`,`octAmt`,`novQty`,`novAmt`,`decQty`,`decAmt`,`totalQty`,`totalAmt`,`augQtyt`,`fiscalYear`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,'Daily','Distributor','NANDALALA','222','5','2.0000','3','4.0000','3','2.0000','4','2.0000','4','3.0000','3','2.0000','4','3.0000','2','4.0000','4','5.0000','3','3.0000','4','2.0000','5','3.0000','123647','75642954.0000','5452',2022,'sheik','2022-02-11 11:47:21','sheik','2022-02-11 11:47:35');
/*!40000 ALTER TABLE `delnotetrends001mb` ENABLE KEYS */;


--
-- Definition of table `department001hb`
--

DROP TABLE IF EXISTS `department001hb`;
CREATE TABLE `department001hb` (
  `deptid` int(11) NOT NULL AUTO_INCREMENT,
  `deptName` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`deptid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department001hb`
--

/*!40000 ALTER TABLE `department001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `department001hb` ENABLE KEYS */;


--
-- Definition of table `department001mb`
--

DROP TABLE IF EXISTS `department001mb`;
CREATE TABLE `department001mb` (
  `deptid` int(11) NOT NULL AUTO_INCREMENT,
  `deptName` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`deptid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department001mb`
--

/*!40000 ALTER TABLE `department001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `department001mb` ENABLE KEYS */;


--
-- Definition of table `departments001hb`
--

DROP TABLE IF EXISTS `departments001hb`;
CREATE TABLE `departments001hb` (
  `sl_no` int(11) NOT NULL AUTO_INCREMENT,
  `departmentname` varchar(255) DEFAULT NULL,
  `departmentdescription` varchar(255) DEFAULT NULL,
  `domain` varchar(255) DEFAULT NULL,
  `domainslno` int(11) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`sl_no`),
  KEY `domainslno` (`domainslno`),
  CONSTRAINT `departments001hb_ibfk_1` FOREIGN KEY (`domainslno`) REFERENCES `domain001mb` (`domainId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `departments001hb`
--

/*!40000 ALTER TABLE `departments001hb` DISABLE KEYS */;
INSERT INTO `departments001hb` (`sl_no`,`departmentname`,`departmentdescription`,`domain`,`domainslno`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (3,'as','asaasa',NULL,30,'siva','2023-01-02 17:05:27','siva','2023-01-02 17:05:39');
/*!40000 ALTER TABLE `departments001hb` ENABLE KEYS */;


--
-- Definition of table `departments001mb`
--

DROP TABLE IF EXISTS `departments001mb`;
CREATE TABLE `departments001mb` (
  `sl_no` int(11) NOT NULL AUTO_INCREMENT,
  `departmentname` varchar(255) DEFAULT NULL,
  `departmentdescription` varchar(255) DEFAULT NULL,
  `domain` varchar(255) DEFAULT NULL,
  `domainslno` int(11) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`sl_no`),
  KEY `domainslno` (`domainslno`),
  CONSTRAINT `departments001mb_ibfk_1` FOREIGN KEY (`domainslno`) REFERENCES `domain001mb` (`domainId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `departments001mb`
--

/*!40000 ALTER TABLE `departments001mb` DISABLE KEYS */;
INSERT INTO `departments001mb` (`sl_no`,`departmentname`,`departmentdescription`,`domain`,`domainslno`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (2,'gh','gh',NULL,30,'siva','2022-12-30 15:19:18',NULL,NULL);
/*!40000 ALTER TABLE `departments001mb` ENABLE KEYS */;


--
-- Definition of table `designation001hb`
--

DROP TABLE IF EXISTS `designation001hb`;
CREATE TABLE `designation001hb` (
  `designId` int(11) NOT NULL AUTO_INCREMENT,
  `designation` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`designId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `designation001hb`
--

/*!40000 ALTER TABLE `designation001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `designation001hb` ENABLE KEYS */;


--
-- Definition of table `designation001mb`
--

DROP TABLE IF EXISTS `designation001mb`;
CREATE TABLE `designation001mb` (
  `designId` int(11) NOT NULL AUTO_INCREMENT,
  `designation` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`designId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `designation001mb`
--

/*!40000 ALTER TABLE `designation001mb` DISABLE KEYS */;
INSERT INTO `designation001mb` (`designId`,`designation`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (6,'IT TECH','sheik','2022-02-11 09:43:19','sheik','2022-02-11 09:43:29');
/*!40000 ALTER TABLE `designation001mb` ENABLE KEYS */;


--
-- Definition of table `domain001hb`
--

DROP TABLE IF EXISTS `domain001hb`;
CREATE TABLE `domain001hb` (
  `domainId` int(11) NOT NULL AUTO_INCREMENT,
  `domainname` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`domainId`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `domain001hb`
--

/*!40000 ALTER TABLE `domain001hb` DISABLE KEYS */;
INSERT INTO `domain001hb` (`domainId`,`domainname`,`description`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (29,'sdfg','fgg','siva','2022-12-29 10:26:59','siva','2022-12-29 10:35:36'),
 (31,'ty','fg','siva','2022-12-30 15:20:36',NULL,NULL);
/*!40000 ALTER TABLE `domain001hb` ENABLE KEYS */;


--
-- Definition of table `domain001mb`
--

DROP TABLE IF EXISTS `domain001mb`;
CREATE TABLE `domain001mb` (
  `domainId` int(11) NOT NULL AUTO_INCREMENT,
  `domainname` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`domainId`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `domain001mb`
--

/*!40000 ALTER TABLE `domain001mb` DISABLE KEYS */;
INSERT INTO `domain001mb` (`domainId`,`domainname`,`description`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (30,'sd','fg','siva','2022-12-30 15:09:48','siva','2023-01-11 16:36:22'),
 (32,'fg','fg','siva','2023-01-04 03:25:34',NULL,NULL);
/*!40000 ALTER TABLE `domain001mb` ENABLE KEYS */;


--
-- Definition of table `email001hb`
--

DROP TABLE IF EXISTS `email001hb`;
CREATE TABLE `email001hb` (
  `emailId` int(11) NOT NULL AUTO_INCREMENT,
  `emailFrom` varchar(50) NOT NULL,
  `emailTo` varchar(50) NOT NULL,
  `emailCC` text NOT NULL,
  `emailBCC` text NOT NULL,
  `emailDate` datetime DEFAULT NULL,
  `emailSubject` varchar(100) DEFAULT NULL,
  `emailBody` text,
  `emailCurrentPlace` varchar(30) DEFAULT NULL,
  `isEmailViewed` varchar(30) DEFAULT NULL,
  `isEmailAttachmentExists` varchar(10) DEFAULT NULL,
  `multipleEmailId` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`emailId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `email001hb`
--

/*!40000 ALTER TABLE `email001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `email001hb` ENABLE KEYS */;


--
-- Definition of table `email001mb`
--

DROP TABLE IF EXISTS `email001mb`;
CREATE TABLE `email001mb` (
  `emailId` int(11) NOT NULL AUTO_INCREMENT,
  `emailFrom` varchar(50) NOT NULL,
  `emailTo` varchar(50) NOT NULL,
  `emailCC` text NOT NULL,
  `emailBCC` text NOT NULL,
  `emailDate` datetime DEFAULT NULL,
  `emailSubject` varchar(100) DEFAULT NULL,
  `emailBody` text,
  `emailCurrentPlace` varchar(30) DEFAULT NULL,
  `isEmailViewed` varchar(30) DEFAULT NULL,
  `isEmailAttachmentExists` varchar(10) DEFAULT NULL,
  `multipleEmailId` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`emailId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `email001mb`
--

/*!40000 ALTER TABLE `email001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `email001mb` ENABLE KEYS */;


--
-- Definition of table `emailattachment001hb`
--

DROP TABLE IF EXISTS `emailattachment001hb`;
CREATE TABLE `emailattachment001hb` (
  `emailattachmentid` int(11) NOT NULL AUTO_INCREMENT,
  `content` tinyblob,
  `contenttype` varchar(255) DEFAULT NULL,
  `emailId` varchar(225) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `filesize` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`emailattachmentid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emailattachment001hb`
--

/*!40000 ALTER TABLE `emailattachment001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `emailattachment001hb` ENABLE KEYS */;


--
-- Definition of table `emailattachment001mb`
--

DROP TABLE IF EXISTS `emailattachment001mb`;
CREATE TABLE `emailattachment001mb` (
  `emailattachmentid` int(11) NOT NULL AUTO_INCREMENT,
  `content` tinyblob,
  `contenttype` varchar(255) DEFAULT NULL,
  `emailId` varchar(225) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `filesize` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`emailattachmentid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emailattachment001mb`
--

/*!40000 ALTER TABLE `emailattachment001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `emailattachment001mb` ENABLE KEYS */;


--
-- Definition of table `emailsignature001hb`
--

DROP TABLE IF EXISTS `emailsignature001hb`;
CREATE TABLE `emailsignature001hb` (
  `emailSignatureId` int(11) NOT NULL AUTO_INCREMENT,
  `companyName` varchar(255) DEFAULT NULL,
  `companyWebsite` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `emailAddress` varchar(255) DEFAULT NULL,
  `employeeDesignation` varchar(255) DEFAULT NULL,
  `employeeId` int(11) DEFAULT NULL,
  `employeeName` varchar(255) DEFAULT NULL,
  `employeeNamePrefix` varchar(255) DEFAULT NULL,
  `logoLink` varchar(255) DEFAULT NULL,
  `mobileNumber` int(10) DEFAULT NULL,
  `phoneNumber` int(10) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`emailSignatureId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emailsignature001hb`
--

/*!40000 ALTER TABLE `emailsignature001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `emailsignature001hb` ENABLE KEYS */;


--
-- Definition of table `emailsignature001mb`
--

DROP TABLE IF EXISTS `emailsignature001mb`;
CREATE TABLE `emailsignature001mb` (
  `emailSignatureId` int(11) NOT NULL AUTO_INCREMENT,
  `companyName` varchar(255) DEFAULT NULL,
  `companyWebsite` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `emailAddress` varchar(255) DEFAULT NULL,
  `employeeDesignation` varchar(255) DEFAULT NULL,
  `employeeId` int(11) DEFAULT NULL,
  `employeeName` varchar(255) DEFAULT NULL,
  `employeeNamePrefix` varchar(255) DEFAULT NULL,
  `logoLink` varchar(255) DEFAULT NULL,
  `mobileNumber` int(10) DEFAULT NULL,
  `phoneNumber` int(10) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`emailSignatureId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emailsignature001mb`
--

/*!40000 ALTER TABLE `emailsignature001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `emailsignature001mb` ENABLE KEYS */;


--
-- Definition of table `empattendance001hb`
--

DROP TABLE IF EXISTS `empattendance001hb`;
CREATE TABLE `empattendance001hb` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `clTaken` varchar(255) DEFAULT NULL,
  `compoffTaken` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `lwtoutpTaken` varchar(255) DEFAULT NULL,
  `mtlvTaken` varchar(255) DEFAULT NULL,
  `ptyTaken` varchar(255) DEFAULT NULL,
  `pvglvTaken` varchar(255) DEFAULT NULL,
  `sklvTaken` varchar(255) DEFAULT NULL,
  `vcTaken` varchar(255) DEFAULT NULL,
  `clBalance` int(11) DEFAULT NULL,
  `compoffBalance` int(11) DEFAULT NULL,
  `lwtoutpBalance` int(11) DEFAULT NULL,
  `mtlvBalance` int(11) DEFAULT NULL,
  `ptyBalance` int(11) DEFAULT NULL,
  `pvglvBalance` int(11) DEFAULT NULL,
  `sklvBalance` int(11) DEFAULT NULL,
  `vcBalance` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empattendance001hb`
--

/*!40000 ALTER TABLE `empattendance001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `empattendance001hb` ENABLE KEYS */;


--
-- Definition of table `empattendance001mb`
--

DROP TABLE IF EXISTS `empattendance001mb`;
CREATE TABLE `empattendance001mb` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `clTaken` varchar(255) DEFAULT NULL,
  `compoffTaken` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `lwtoutpTaken` varchar(255) DEFAULT NULL,
  `mtlvTaken` varchar(255) DEFAULT NULL,
  `ptyTaken` varchar(255) DEFAULT NULL,
  `pvglvTaken` varchar(255) DEFAULT NULL,
  `sklvTaken` varchar(255) DEFAULT NULL,
  `vcTaken` varchar(255) DEFAULT NULL,
  `clBalance` int(11) DEFAULT NULL,
  `compoffBalance` int(11) DEFAULT NULL,
  `lwtoutpBalance` int(11) DEFAULT NULL,
  `mtlvBalance` int(11) DEFAULT NULL,
  `ptyBalance` int(11) DEFAULT NULL,
  `pvglvBalance` int(11) DEFAULT NULL,
  `sklvBalance` int(11) DEFAULT NULL,
  `vcBalance` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empattendance001mb`
--

/*!40000 ALTER TABLE `empattendance001mb` DISABLE KEYS */;
INSERT INTO `empattendance001mb` (`Id`,`clTaken`,`compoffTaken`,`deptName`,`empName`,`empNumber`,`lwtoutpTaken`,`mtlvTaken`,`ptyTaken`,`pvglvTaken`,`sklvTaken`,`vcTaken`,`clBalance`,`compoffBalance`,`lwtoutpBalance`,`mtlvBalance`,`ptyBalance`,`pvglvBalance`,`sklvBalance`,`vcBalance`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (30,'75646','12345','Dummy2','Dummy1','Dummy1','1245697','3000','1000','2000','300','500',78886,3000,2000,10000,20000,500,900,100,'sheik','2022-02-11 07:11:26','sheik','2022-02-11 07:12:05'),
 (31,'434','4423','Dummy1','Dummy2','Dummy2','4244','4242','765','52542','525','424',3231,442,6355,7464,3131,52542,525,636,'siva','2022-10-20 16:39:59',NULL,NULL);
/*!40000 ALTER TABLE `empattendance001mb` ENABLE KEYS */;


--
-- Definition of table `empleavebalance001hb`
--

DROP TABLE IF EXISTS `empleavebalance001hb`;
CREATE TABLE `empleavebalance001hb` (
  `elbId` int(11) NOT NULL AUTO_INCREMENT,
  `branch` varchar(255) DEFAULT NULL,
  `clTaken` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `compoffTaken` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `lvwoutpayTaken` varchar(255) DEFAULT NULL,
  `plTaken` varchar(255) DEFAULT NULL,
  `slTaken` varchar(255) DEFAULT NULL,
  `clBalance` int(11) DEFAULT NULL,
  `compoffBalance` int(11) DEFAULT NULL,
  `fromDate` datetime DEFAULT NULL,
  `lvwoutpayBalance` int(11) DEFAULT NULL,
  `plBalance` int(11) DEFAULT NULL,
  `slBalance` int(11) DEFAULT NULL,
  `toDate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`elbId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empleavebalance001hb`
--

/*!40000 ALTER TABLE `empleavebalance001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `empleavebalance001hb` ENABLE KEYS */;


--
-- Definition of table `empleavebalance001mb`
--

DROP TABLE IF EXISTS `empleavebalance001mb`;
CREATE TABLE `empleavebalance001mb` (
  `elbId` int(11) NOT NULL AUTO_INCREMENT,
  `branch` varchar(255) DEFAULT NULL,
  `clTaken` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `compoffTaken` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `lvwoutpayTaken` varchar(255) DEFAULT NULL,
  `plTaken` varchar(255) DEFAULT NULL,
  `slTaken` varchar(255) DEFAULT NULL,
  `clBalance` int(11) DEFAULT NULL,
  `compoffBalance` int(11) DEFAULT NULL,
  `fromDate` datetime DEFAULT NULL,
  `lvwoutpayBalance` int(11) DEFAULT NULL,
  `plBalance` int(11) DEFAULT NULL,
  `slBalance` int(11) DEFAULT NULL,
  `toDate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`elbId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empleavebalance001mb`
--

/*!40000 ALTER TABLE `empleavebalance001mb` DISABLE KEYS */;
INSERT INTO `empleavebalance001mb` (`elbId`,`branch`,`clTaken`,`company`,`compoffTaken`,`deptName`,`empName`,`empNumber`,`lvwoutpayTaken`,`plTaken`,`slTaken`,`clBalance`,`compoffBalance`,`fromDate`,`lvwoutpayBalance`,`plBalance`,`slBalance`,`toDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,'Dummy3','75646','Dummy2','12345','Dummy3','Dummy2','Dummy1','454','1231','456',78886,300,'2022-01-31 18:30:00',7987,756,454454,'2022-02-14 18:30:00','sheik','2022-02-11 09:47:33','sheik','2022-02-11 09:47:46');
/*!40000 ALTER TABLE `empleavebalance001mb` ENABLE KEYS */;


--
-- Definition of table `employbirthday001hb`
--

DROP TABLE IF EXISTS `employbirthday001hb`;
CREATE TABLE `employbirthday001hb` (
  `empbirthId` int(11) NOT NULL AUTO_INCREMENT,
  `branch` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `ebmonth` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  `empDesign` varchar(255) DEFAULT NULL,
  `empGender` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `empDob` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`empbirthId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employbirthday001hb`
--

/*!40000 ALTER TABLE `employbirthday001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `employbirthday001hb` ENABLE KEYS */;


--
-- Definition of table `employbirthday001mb`
--

DROP TABLE IF EXISTS `employbirthday001mb`;
CREATE TABLE `employbirthday001mb` (
  `empbirthId` int(11) NOT NULL AUTO_INCREMENT,
  `branch` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `ebmonth` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  `empDesign` varchar(255) DEFAULT NULL,
  `empGender` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `empDob` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`empbirthId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employbirthday001mb`
--

/*!40000 ALTER TABLE `employbirthday001mb` DISABLE KEYS */;
INSERT INTO `employbirthday001mb` (`empbirthId`,`branch`,`deptName`,`ebmonth`,`empCompany`,`empDesign`,`empGender`,`empName`,`empNumber`,`empDob`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'Dummy2','Dummy2','February','Dummy2','Dummy2','Male','Dummy1','Dummy2','2022-02-13 18:30:00','sheik','2022-02-11 09:48:09','sheik','2022-02-11 09:48:15');
/*!40000 ALTER TABLE `employbirthday001mb` ENABLE KEYS */;


--
-- Definition of table `employee001hb`
--

DROP TABLE IF EXISTS `employee001hb`;
CREATE TABLE `employee001hb` (
  `sNo` int(11) NOT NULL AUTO_INCREMENT,
  `branch` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  `empDesign` varchar(255) DEFAULT NULL,
  `empGender` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `empStatus` varchar(255) DEFAULT NULL,
  `deptId` int(11) DEFAULT NULL,
  `empDob` datetime DEFAULT NULL,
  `empDoj` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`sNo`),
  KEY `FK_lfpkw0qe0ooeudqb515f7mer5` (`deptId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee001hb`
--

/*!40000 ALTER TABLE `employee001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee001hb` ENABLE KEYS */;


--
-- Definition of table `employee001mb`
--

DROP TABLE IF EXISTS `employee001mb`;
CREATE TABLE `employee001mb` (
  `sNo` int(11) NOT NULL AUTO_INCREMENT,
  `branch` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  `empDesign` varchar(255) DEFAULT NULL,
  `empGender` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `empStatus` varchar(255) DEFAULT NULL,
  `deptId` int(11) DEFAULT NULL,
  `empDob` datetime DEFAULT NULL,
  `empDoj` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`sNo`),
  KEY `FK_lfpkw0qe0ooeudqb515f7mer5` (`deptId`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee001mb`
--

/*!40000 ALTER TABLE `employee001mb` DISABLE KEYS */;
INSERT INTO `employee001mb` (`sNo`,`branch`,`deptName`,`empCompany`,`empDesign`,`empGender`,`empName`,`empNumber`,`empStatus`,`deptId`,`empDob`,`empDoj`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (39,'TRICHY','ELECTRICAL SHELL','NANDALALA','BSC','Male','SHEIK','12345','Inactive',NULL,'2022-02-13 18:30:00','2022-02-20 18:30:00','sheik','2022-02-11 09:52:07','sheik','2022-02-11 09:52:33');
/*!40000 ALTER TABLE `employee001mb` ENABLE KEYS */;


--
-- Definition of table `employmenttype001hb`
--

DROP TABLE IF EXISTS `employmenttype001hb`;
CREATE TABLE `employmenttype001hb` (
  `etypeId` int(11) NOT NULL AUTO_INCREMENT,
  `employmentType` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`etypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employmenttype001hb`
--

/*!40000 ALTER TABLE `employmenttype001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `employmenttype001hb` ENABLE KEYS */;


--
-- Definition of table `employmenttype001mb`
--

DROP TABLE IF EXISTS `employmenttype001mb`;
CREATE TABLE `employmenttype001mb` (
  `etypeId` int(11) NOT NULL AUTO_INCREMENT,
  `employmentType` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`etypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employmenttype001mb`
--

/*!40000 ALTER TABLE `employmenttype001mb` DISABLE KEYS */;
INSERT INTO `employmenttype001mb` (`etypeId`,`employmentType`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (16,'DOCTOR MD','sheik','2022-02-11 09:42:25','sheik','2022-02-11 09:42:41'),
 (17,'Enginneering','siva','2022-10-20 16:46:48',NULL,NULL);
/*!40000 ALTER TABLE `employmenttype001mb` ENABLE KEYS */;


--
-- Definition of table `empsalaryregister001hb`
--

DROP TABLE IF EXISTS `empsalaryregister001hb`;
CREATE TABLE `empsalaryregister001hb` (
  `esregId` int(11) NOT NULL AUTO_INCREMENT,
  `basic` varchar(255) DEFAULT NULL,
  `branch` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  `empDesign` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `paymentDays` varchar(255) DEFAULT NULL,
  `salYear` varchar(255) DEFAULT NULL,
  `salarymonth` varchar(255) DEFAULT NULL,
  `salslipCode` varchar(255) DEFAULT NULL,
  `totalDeduct` varchar(255) DEFAULT NULL,
  `arrearAmt` int(11) DEFAULT NULL,
  `grossPay` int(11) DEFAULT NULL,
  `incomeTax` int(11) DEFAULT NULL,
  `lvencashAmt` int(11) DEFAULT NULL,
  `lvwoutPay` int(11) DEFAULT NULL,
  `netPay` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`esregId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empsalaryregister001hb`
--

/*!40000 ALTER TABLE `empsalaryregister001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `empsalaryregister001hb` ENABLE KEYS */;


--
-- Definition of table `empsalaryregister001mb`
--

DROP TABLE IF EXISTS `empsalaryregister001mb`;
CREATE TABLE `empsalaryregister001mb` (
  `esregId` int(11) NOT NULL AUTO_INCREMENT,
  `basic` varchar(255) DEFAULT NULL,
  `branch` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  `empDesign` varchar(255) DEFAULT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `paymentDays` varchar(255) DEFAULT NULL,
  `salYear` varchar(255) DEFAULT NULL,
  `salarymonth` varchar(255) DEFAULT NULL,
  `salslipCode` varchar(255) DEFAULT NULL,
  `totalDeduct` varchar(255) DEFAULT NULL,
  `arrearAmt` int(11) DEFAULT NULL,
  `grossPay` int(11) DEFAULT NULL,
  `incomeTax` int(11) DEFAULT NULL,
  `lvencashAmt` int(11) DEFAULT NULL,
  `lvwoutPay` int(11) DEFAULT NULL,
  `netPay` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`esregId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empsalaryregister001mb`
--

/*!40000 ALTER TABLE `empsalaryregister001mb` DISABLE KEYS */;
INSERT INTO `empsalaryregister001mb` (`esregId`,`basic`,`branch`,`deptName`,`empCompany`,`empDesign`,`empName`,`empNumber`,`paymentDays`,`salYear`,`salarymonth`,`salslipCode`,`totalDeduct`,`arrearAmt`,`grossPay`,`incomeTax`,`lvencashAmt`,`lvwoutPay`,`netPay`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'12354134','Dummy1','Dummy2','Dummy2','Dummy1','Dummy2','Dummy1','21','2020','March','123456','1564',789844,456,4564,1231787,1234523,15454,'sheik','2022-02-11 09:49:47','sheik','2022-02-11 09:49:59');
/*!40000 ALTER TABLE `empsalaryregister001mb` ENABLE KEYS */;


--
-- Definition of table `empworkonholiday001hb`
--

DROP TABLE IF EXISTS `empworkonholiday001hb`;
CREATE TABLE `empworkonholiday001hb` (
  `empwhId` int(11) NOT NULL AUTO_INCREMENT,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `empStatus` varchar(255) DEFAULT NULL,
  `holiday` varchar(255) DEFAULT NULL,
  `holidayList` varchar(255) DEFAULT NULL,
  `fromDate` datetime DEFAULT NULL,
  `toDate` datetime DEFAULT NULL,
  `whDate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`empwhId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empworkonholiday001hb`
--

/*!40000 ALTER TABLE `empworkonholiday001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `empworkonholiday001hb` ENABLE KEYS */;


--
-- Definition of table `empworkonholiday001mb`
--

DROP TABLE IF EXISTS `empworkonholiday001mb`;
CREATE TABLE `empworkonholiday001mb` (
  `empwhId` int(11) NOT NULL AUTO_INCREMENT,
  `empName` varchar(255) DEFAULT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `empStatus` varchar(255) DEFAULT NULL,
  `holiday` varchar(255) DEFAULT NULL,
  `holidayList` varchar(255) DEFAULT NULL,
  `fromDate` datetime DEFAULT NULL,
  `toDate` datetime DEFAULT NULL,
  `whDate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`empwhId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empworkonholiday001mb`
--

/*!40000 ALTER TABLE `empworkonholiday001mb` DISABLE KEYS */;
INSERT INTO `empworkonholiday001mb` (`empwhId`,`empName`,`empNumber`,`empStatus`,`holiday`,`holidayList`,`fromDate`,`toDate`,`whDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'Dummy2','Dummy1','Absent','Tuesday','Monday','2022-02-14 18:30:00','2022-02-15 18:30:00','2022-02-21 18:30:00','sheik','2022-02-11 09:48:46','sheik','2022-02-11 09:48:53');
/*!40000 ALTER TABLE `empworkonholiday001mb` ENABLE KEYS */;


--
-- Definition of table `expensesclm001hb`
--

DROP TABLE IF EXISTS `expensesclm001hb`;
CREATE TABLE `expensesclm001hb` (
  `expclmId` int(11) NOT NULL AUTO_INCREMENT,
  `expCode` varchar(255) DEFAULT NULL,
  `expType` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `totalclmAmt` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`expclmId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expensesclm001hb`
--

/*!40000 ALTER TABLE `expensesclm001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `expensesclm001hb` ENABLE KEYS */;


--
-- Definition of table `expensesclm001mb`
--

DROP TABLE IF EXISTS `expensesclm001mb`;
CREATE TABLE `expensesclm001mb` (
  `expclmId` int(11) NOT NULL AUTO_INCREMENT,
  `expCode` varchar(255) DEFAULT NULL,
  `expType` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `totalclmAmt` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`expclmId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expensesclm001mb`
--

/*!40000 ALTER TABLE `expensesclm001mb` DISABLE KEYS */;
INSERT INTO `expensesclm001mb` (`expclmId`,`expCode`,`expType`,`status`,`totalclmAmt`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (9,'125','Medical','Submitted',4560,'sheik','2022-02-11 07:31:46','sheik','2022-02-11 07:32:00'),
 (10,'53','Calls','Queued for Saving',54645,'siva','2022-10-20 16:44:11',NULL,NULL);
/*!40000 ALTER TABLE `expensesclm001mb` ENABLE KEYS */;


--
-- Definition of table `favourites001hb`
--

DROP TABLE IF EXISTS `favourites001hb`;
CREATE TABLE `favourites001hb` (
  `fav_id` int(11) NOT NULL AUTO_INCREMENT,
  `property` varchar(250) DEFAULT NULL,
  `link` varchar(250) DEFAULT NULL,
  `login_user` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `insert_user` varchar(50) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(50) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`fav_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `favourites001hb`
--

/*!40000 ALTER TABLE `favourites001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `favourites001hb` ENABLE KEYS */;


--
-- Definition of table `favourites001mb`
--

DROP TABLE IF EXISTS `favourites001mb`;
CREATE TABLE `favourites001mb` (
  `fav_id` int(11) NOT NULL AUTO_INCREMENT,
  `property` varchar(250) DEFAULT NULL,
  `link` varchar(250) DEFAULT NULL,
  `login_user` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `insert_user` varchar(50) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(50) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`fav_id`)
) ENGINE=InnoDB AUTO_INCREMENT=447 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `favourites001mb`
--

/*!40000 ALTER TABLE `favourites001mb` DISABLE KEYS */;
INSERT INTO `favourites001mb` (`fav_id`,`property`,`link`,`login_user`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (432,'ProductionPlanningTool','./app-manufacturing/app-product-order-details/app-product-plan','sekar','Y','sekar','2021-11-08 10:48:03',NULL,NULL),
 (433,'ProductStockEntry','./app-manufacturing/app-product-order-details/app-product-stock','sekar','Y','sekar','2021-11-08 10:48:03',NULL,NULL),
 (434,'ProductTimeSheet','./app-manufacturing/app-product-order-details/app-product-timest','sekar','Y','sekar','2021-11-08 10:48:03',NULL,NULL),
 (440,'ProductionPlanningTool','./app-manufacturing/app-product-order-details/app-product-plan','siva','Y','siva','2022-12-14 18:55:56',NULL,NULL),
 (441,'ProductStockEntry','./app-manufacturing/app-product-order-details/app-product-stock','siva','Y','siva','2022-12-14 18:55:56',NULL,NULL),
 (442,'ProductTimeSheet','./app-manufacturing/app-product-order-details/app-product-timest','siva','Y','siva','2022-12-14 18:55:56',NULL,NULL),
 (443,'BillOfMaterials','./app-manufacturing/app-bom-details/app-material','siva','Y','siva','2022-12-14 18:55:56',NULL,NULL),
 (444,'ItemStatus','./app-manufacturing/app-bom-details/app-item-status','siva','Y','siva','2022-12-14 18:55:56',NULL,NULL),
 (445,'WorkStation','./app-manufacturing/app-bom-details/app-work-station','siva','Y','siva','2022-12-14 18:55:56',NULL,NULL),
 (446,'BOMOperation','./app-manufacturing/app-bom-details/app-operation','siva','Y','siva','2022-12-14 18:55:56',NULL,NULL);
/*!40000 ALTER TABLE `favourites001mb` ENABLE KEYS */;


--
-- Definition of table `filemanager001hb`
--

DROP TABLE IF EXISTS `filemanager001hb`;
CREATE TABLE `filemanager001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `loginuser` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  `originalfilename` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `filemanager001hb`
--

/*!40000 ALTER TABLE `filemanager001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `filemanager001hb` ENABLE KEYS */;


--
-- Definition of table `filemanager001mb`
--

DROP TABLE IF EXISTS `filemanager001mb`;
CREATE TABLE `filemanager001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `loginuser` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  `originalfilename` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `filemanager001mb`
--

/*!40000 ALTER TABLE `filemanager001mb` DISABLE KEYS */;
INSERT INTO `filemanager001mb` (`id`,`category`,`filename`,`loginuser`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`,`originalfilename`) VALUES 
 (1,'Employee','breadcrumb.txt','sivakumar','sivakumar','2021-10-20 12:15:17',NULL,NULL,'1634712317020_breadcrumb.txt'),
 (2,'Employee','ERP_BACKUP','sivakumar','sivakumar','2021-10-20 12:17:09',NULL,NULL,'1634712429305_ERP_BACKUP'),
 (3,'Employee','lbsts.txt','sivakumar','sivakumar','2021-10-20 12:25:14',NULL,NULL,'1634712914215_lbsts.txt'),
 (4,'Buyer','ResQSoft-Bugs.txt','sivakumar','sivakumar','2021-10-20 12:26:51',NULL,NULL,'1634713011098_ResQSoft-Bugs.txt'),
 (5,'Employee','claims.png','sivakumar','sivakumar','2021-10-20 14:45:46',NULL,NULL,'1634721346598_claims.png'),
 (6,'Seller','lbsts.txt','sivakumar','sivakumar','2021-10-20 14:52:39',NULL,NULL,'1634721759534_lbsts.txt'),
 (7,'Customer','breadcrumb.txt','sivakumar','sivakumar','2021-10-20 15:19:41',NULL,NULL,'1634723381562_breadcrumb.txt'),
 (8,'Supplier','upwork.txt','sivakumar','sivakumar','2021-10-20 16:02:30',NULL,NULL,'1634725950820_upwork.txt'),
 (9,'Stock','ERP.docx','sivakumar','sivakumar','2021-10-20 16:55:14',NULL,NULL,'1634729114887_ERP.docx'),
 (11,'Employee','FLEXION-SALES.docx','sivakumar','sivakumar','2021-12-13 16:56:59',NULL,NULL,'1639394819558_FLEXION-SALES.docx'),
 (12,'Employee','1639394819558_FLEXION-SALES.docx','','sivakumar','2021-12-13 17:04:51',NULL,NULL,'1639395291656_1639394819558_FLEXION-SALES.docx'),
 (13,'Employee','FLEXION-SALES.docx','sivakumar','sivakumar','2021-12-13 18:19:00',NULL,NULL,'1639399741143_FLEXION-SALES.docx'),
 (14,'null','FLEXION-SALES.docx','sivakumar','sivakumar','2021-12-13 18:19:07',NULL,NULL,'1639399747457_FLEXION-SALES.docx'),
 (15,'Buyer','P-inquiry.png','sivakumar','sivakumar','2021-12-13 18:36:46',NULL,NULL,'1639400806566_P-inquiry.png'),
 (16,'Buyer','ts.txt','sivakumar','sivakumar','2022-11-23 18:35:48',NULL,NULL,NULL),
 (17,'Customer','text.txt','sivakumar','sivakumar','2022-11-23 18:42:53',NULL,NULL,NULL),
 (18,'Buyer','dhanaraj.docx','sivakumar','sivakumar','2022-11-24 10:41:06',NULL,NULL,'1669266666883_dhanaraj.docx'),
 (19,'Supplier','ts.txt','sivakumar','sivakumar','2022-11-24 10:43:35',NULL,NULL,'1669266815715_ts.txt'),
 (20,'Seller','download.jpg','sivakumar','sivakumar','2022-11-25 13:57:24',NULL,NULL,'1669364844415_download.jpg'),
 (21,'Buyer','demo.html.docx','sivakumar','sivakumar','2022-12-07 10:57:30',NULL,NULL,NULL);
/*!40000 ALTER TABLE `filemanager001mb` ENABLE KEYS */;


--
-- Definition of table `fiscalyear001hb`
--

DROP TABLE IF EXISTS `fiscalyear001hb`;
CREATE TABLE `fiscalyear001hb` (
  `yearId` int(11) NOT NULL AUTO_INCREMENT,
  `yearName` varchar(20) NOT NULL,
  `status` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`yearId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fiscalyear001hb`
--

/*!40000 ALTER TABLE `fiscalyear001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `fiscalyear001hb` ENABLE KEYS */;


--
-- Definition of table `fiscalyear001mb`
--

DROP TABLE IF EXISTS `fiscalyear001mb`;
CREATE TABLE `fiscalyear001mb` (
  `yearId` int(11) NOT NULL AUTO_INCREMENT,
  `yearName` varchar(20) NOT NULL,
  `status` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`yearId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fiscalyear001mb`
--

/*!40000 ALTER TABLE `fiscalyear001mb` DISABLE KEYS */;
INSERT INTO `fiscalyear001mb` (`yearId`,`yearName`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'2015','Enabled','','0000-00-00 00:00:00',NULL,NULL),
 (2,'2014','Disabled','','0000-00-00 00:00:00',NULL,NULL),
 (3,'2016','Enabled','','0000-00-00 00:00:00',NULL,NULL),
 (4,'2012','Enabled','','0000-00-00 00:00:00',NULL,NULL),
 (5,'2016','Enabled','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `fiscalyear001mb` ENABLE KEYS */;


--
-- Definition of table `grossprofit001hb`
--

DROP TABLE IF EXISTS `grossprofit001hb`;
CREATE TABLE `grossprofit001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `salesinvoice` varchar(45) NOT NULL,
  `customer` varchar(45) NOT NULL,
  `itemname` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `warehouse` varchar(45) NOT NULL,
  `project` varchar(45) NOT NULL,
  `quantity` int(10) unsigned NOT NULL,
  `averagesellingrate` int(10) unsigned NOT NULL,
  `averagebuyingrate` int(10) unsigned NOT NULL,
  `sellingamount` int(10) unsigned NOT NULL,
  `buyingamount` int(10) unsigned NOT NULL,
  `grossprofit` int(10) unsigned NOT NULL,
  `grosspercentage` int(10) unsigned NOT NULL,
  `postingdate` datetime NOT NULL,
  `currency` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `grossprofit001hb`
--

/*!40000 ALTER TABLE `grossprofit001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `grossprofit001hb` ENABLE KEYS */;


--
-- Definition of table `grossprofit001mb`
--

DROP TABLE IF EXISTS `grossprofit001mb`;
CREATE TABLE `grossprofit001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `salesinvoice` varchar(45) NOT NULL,
  `customer` varchar(45) NOT NULL,
  `itemname` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `warehouse` varchar(45) NOT NULL,
  `project` varchar(45) NOT NULL,
  `quantity` int(10) unsigned NOT NULL,
  `averagesellingrate` int(10) unsigned NOT NULL,
  `averagebuyingrate` int(10) unsigned NOT NULL,
  `sellingamount` int(10) unsigned NOT NULL,
  `buyingamount` int(10) unsigned NOT NULL,
  `grossprofit` int(10) unsigned NOT NULL,
  `grosspercentage` int(10) unsigned NOT NULL,
  `postingdate` datetime NOT NULL,
  `currency` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `grossprofit001mb`
--

/*!40000 ALTER TABLE `grossprofit001mb` DISABLE KEYS */;
INSERT INTO `grossprofit001mb` (`id`,`salesinvoice`,`customer`,`itemname`,`description`,`warehouse`,`project`,`quantity`,`averagesellingrate`,`averagebuyingrate`,`sellingamount`,`buyingamount`,`grossprofit`,`grosspercentage`,`postingdate`,`currency`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (50,'sheik','Dummy1','Dummy2','2','2','2',7,5,4,78452,2242,3451,6544,'2022-02-13 18:30:00',1238,'sheik','2022-02-11 05:42:38','sheik','2022-02-11 05:42:52'),
 (51,'sdsg','Dummy2','Dummy3','343','422','42',3232,2323,3131,331,33,3131,311,'2022-10-03 00:00:00',32,'siva','2022-10-20 15:45:06',NULL,NULL),
 (52,'sdsg','Dummy3','Dummy3','343','rwr','rwwr',42,42,64,42,42,64,423,'2022-10-04 00:00:00',424,'siva','2022-10-20 15:46:25',NULL,NULL);
/*!40000 ALTER TABLE `grossprofit001mb` ENABLE KEYS */;


--
-- Definition of table `holidaylist001hb`
--

DROP TABLE IF EXISTS `holidaylist001hb`;
CREATE TABLE `holidaylist001hb` (
  `hlistId` int(11) NOT NULL AUTO_INCREMENT,
  `holidayName` varchar(30) NOT NULL,
  `weeklyOff` varchar(30) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`hlistId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `holidaylist001hb`
--

/*!40000 ALTER TABLE `holidaylist001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `holidaylist001hb` ENABLE KEYS */;


--
-- Definition of table `holidaylist001mb`
--

DROP TABLE IF EXISTS `holidaylist001mb`;
CREATE TABLE `holidaylist001mb` (
  `hlistId` int(11) NOT NULL AUTO_INCREMENT,
  `holidayName` varchar(30) NOT NULL,
  `weeklyOff` varchar(30) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`hlistId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `holidaylist001mb`
--

/*!40000 ALTER TABLE `holidaylist001mb` DISABLE KEYS */;
INSERT INTO `holidaylist001mb` (`hlistId`,`holidayName`,`weeklyOff`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (12,'DIWALI','Saturday','sheik','2022-02-11 07:25:08','sheik','2022-02-11 07:25:18');
/*!40000 ALTER TABLE `holidaylist001mb` ENABLE KEYS */;


--
-- Definition of table `inactivecust001hb`
--

DROP TABLE IF EXISTS `inactivecust001hb`;
CREATE TABLE `inactivecust001hb` (
  `inactcustId` int(11) NOT NULL AUTO_INCREMENT,
  `custType` varchar(50) NOT NULL,
  `customername` varchar(50) NOT NULL,
  `terName` varchar(50) NOT NULL,
  `customergroup` varchar(50) NOT NULL,
  `numoforder` varchar(20) NOT NULL,
  `totalordval` varchar(30) DEFAULT NULL,
  `totalordcons` varchar(40) DEFAULT NULL,
  `lastordamt` decimal(12,4) DEFAULT NULL,
  `daysinlstord` datetime DEFAULT NULL,
  `lastorddate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`inactcustId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inactivecust001hb`
--

/*!40000 ALTER TABLE `inactivecust001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `inactivecust001hb` ENABLE KEYS */;


--
-- Definition of table `inactivecust001mb`
--

DROP TABLE IF EXISTS `inactivecust001mb`;
CREATE TABLE `inactivecust001mb` (
  `inactcustId` int(11) NOT NULL AUTO_INCREMENT,
  `custType` varchar(50) NOT NULL,
  `customername` varchar(50) NOT NULL,
  `terName` varchar(50) NOT NULL,
  `customergroup` varchar(50) NOT NULL,
  `numoforder` varchar(20) NOT NULL,
  `totalordval` varchar(30) DEFAULT NULL,
  `totalordcons` varchar(40) DEFAULT NULL,
  `lastordamt` decimal(12,4) DEFAULT NULL,
  `daysinlstord` datetime DEFAULT NULL,
  `lastorddate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`inactcustId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inactivecust001mb`
--

/*!40000 ALTER TABLE `inactivecust001mb` DISABLE KEYS */;
INSERT INTO `inactivecust001mb` (`inactcustId`,`custType`,`customername`,`terName`,`customergroup`,`numoforder`,`totalordval`,`totalordcons`,`lastordamt`,`daysinlstord`,`lastorddate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (3,'Sales Invoice','Dummy2','GHNG','Dummy1','454','78786','454','4234.0000','2022-02-25 18:30:00','2022-02-14 18:30:00','sheik','2022-02-11 10:11:19','sheik','2022-02-11 10:11:32');
/*!40000 ALTER TABLE `inactivecust001mb` ENABLE KEYS */;


--
-- Definition of table `instalnote001hb`
--

DROP TABLE IF EXISTS `instalnote001hb`;
CREATE TABLE `instalnote001hb` (
  `instId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `remark` varchar(100) NOT NULL,
  `instCode` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`instId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `instalnote001hb`
--

/*!40000 ALTER TABLE `instalnote001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `instalnote001hb` ENABLE KEYS */;


--
-- Definition of table `instalnote001mb`
--

DROP TABLE IF EXISTS `instalnote001mb`;
CREATE TABLE `instalnote001mb` (
  `instId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `remark` varchar(100) NOT NULL,
  `instCode` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`instId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `instalnote001mb`
--

/*!40000 ALTER TABLE `instalnote001mb` DISABLE KEYS */;
INSERT INTO `instalnote001mb` (`instId`,`name`,`status`,`remark`,`instCode`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,'SHEIK','Submitted','9','4564','sheik','2022-02-11 11:16:02','sheik','2022-02-11 11:16:10'),
 (5,'krishika','Submitted','232','534','siva','2022-10-20 17:48:27',NULL,NULL);
/*!40000 ALTER TABLE `instalnote001mb` ENABLE KEYS */;


--
-- Definition of table `issueditem001hb`
--

DROP TABLE IF EXISTS `issueditem001hb`;
CREATE TABLE `issueditem001hb` (
  `issueId` int(11) NOT NULL AUTO_INCREMENT,
  `porderCode` varchar(50) NOT NULL,
  `Itemcode` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `uom` varchar(30) NOT NULL,
  `amount` decimal(12,4) NOT NULL,
  `serialNo` varchar(50) NOT NULL,
  `sourceWH` varchar(50) NOT NULL,
  `targetWH` varchar(50) NOT NULL,
  `stockEntry` varchar(40) NOT NULL,
  `company` varchar(50) NOT NULL,
  `issueDate` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`issueId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `issueditem001hb`
--

/*!40000 ALTER TABLE `issueditem001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `issueditem001hb` ENABLE KEYS */;


--
-- Definition of table `issueditem001mb`
--

DROP TABLE IF EXISTS `issueditem001mb`;
CREATE TABLE `issueditem001mb` (
  `issueId` int(11) NOT NULL AUTO_INCREMENT,
  `porderCode` varchar(50) NOT NULL,
  `Itemcode` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `uom` varchar(30) NOT NULL,
  `amount` decimal(12,4) NOT NULL,
  `serialNo` varchar(50) NOT NULL,
  `sourceWH` varchar(50) NOT NULL,
  `targetWH` varchar(50) NOT NULL,
  `stockEntry` varchar(40) NOT NULL,
  `company` varchar(50) NOT NULL,
  `issueDate` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`issueId`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `issueditem001mb`
--

/*!40000 ALTER TABLE `issueditem001mb` DISABLE KEYS */;
INSERT INTO `issueditem001mb` (`issueId`,`porderCode`,`Itemcode`,`description`,`uom`,`amount`,`serialNo`,`sourceWH`,`targetWH`,`stockEntry`,`company`,`issueDate`,`quantity`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (24,'Dummy1','55','FHNJDF','SHEIK','10000.0000','1','SGS','45','123','NANDALALA','2022-02-07 18:30:00',6,'latha','2022-02-10 00:35:22','latha','2022-02-10 00:35:34');
/*!40000 ALTER TABLE `issueditem001mb` ENABLE KEYS */;


--
-- Definition of table `itemdt001hb`
--

DROP TABLE IF EXISTS `itemdt001hb`;
CREATE TABLE `itemdt001hb` (
  `Itemid` int(11) NOT NULL AUTO_INCREMENT,
  `Itemcode` varchar(50) DEFAULT NULL,
  `Quantity` smallint(6) NOT NULL,
  `Rate` decimal(12,4) DEFAULT NULL,
  `Amount` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Itemid`),
  UNIQUE KEY `Itemcode` (`Itemcode`),
  UNIQUE KEY `IDX_edae62f88dd06a0f27b760ad00` (`Itemcode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemdt001hb`
--

/*!40000 ALTER TABLE `itemdt001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemdt001hb` ENABLE KEYS */;


--
-- Definition of table `itemdt001mb`
--

DROP TABLE IF EXISTS `itemdt001mb`;
CREATE TABLE `itemdt001mb` (
  `Itemid` int(11) NOT NULL AUTO_INCREMENT,
  `Itemcode` varchar(50) DEFAULT NULL,
  `Quantity` smallint(6) NOT NULL,
  `Rate` decimal(12,4) DEFAULT NULL,
  `Amount` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Itemid`),
  UNIQUE KEY `Itemcode` (`Itemcode`),
  UNIQUE KEY `IDX_edae62f88dd06a0f27b760ad00` (`Itemcode`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemdt001mb`
--

/*!40000 ALTER TABLE `itemdt001mb` DISABLE KEYS */;
INSERT INTO `itemdt001mb` (`Itemid`,`Itemcode`,`Quantity`,`Rate`,`Amount`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (2,'123',13,'10000009.0000','12344.0000','siva','2022-11-03 10:57:09',NULL,NULL),
 (3,'sd',456,'545.0000','45.0000','siva','2023-01-02 17:45:55',NULL,NULL);
/*!40000 ALTER TABLE `itemdt001mb` ENABLE KEYS */;


--
-- Definition of table `itemgroup001hb`
--

DROP TABLE IF EXISTS `itemgroup001hb`;
CREATE TABLE `itemgroup001hb` (
  `igId` int(11) NOT NULL AUTO_INCREMENT,
  `itemGroup` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`igId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemgroup001hb`
--

/*!40000 ALTER TABLE `itemgroup001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemgroup001hb` ENABLE KEYS */;


--
-- Definition of table `itemgroup001mb`
--

DROP TABLE IF EXISTS `itemgroup001mb`;
CREATE TABLE `itemgroup001mb` (
  `igId` int(11) NOT NULL AUTO_INCREMENT,
  `itemGroup` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`igId`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemgroup001mb`
--

/*!40000 ALTER TABLE `itemgroup001mb` DISABLE KEYS */;
INSERT INTO `itemgroup001mb` (`igId`,`itemGroup`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (20,'SHEIK FHY','sheik','2022-02-11 10:46:29','sheik','2022-02-11 10:46:41'),
 (21,'86','siva','2022-10-20 15:56:45',NULL,NULL),
 (22,'tred','siva','2022-11-25 16:23:58',NULL,NULL);
/*!40000 ALTER TABLE `itemgroup001mb` ENABLE KEYS */;


--
-- Definition of table `itemprice001hb`
--

DROP TABLE IF EXISTS `itemprice001hb`;
CREATE TABLE `itemprice001hb` (
  `ipId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ipId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemprice001hb`
--

/*!40000 ALTER TABLE `itemprice001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemprice001hb` ENABLE KEYS */;


--
-- Definition of table `itemprice001mb`
--

DROP TABLE IF EXISTS `itemprice001mb`;
CREATE TABLE `itemprice001mb` (
  `ipId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ipId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemprice001mb`
--

/*!40000 ALTER TABLE `itemprice001mb` DISABLE KEYS */;
INSERT INTO `itemprice001mb` (`ipId`,`itemCode`,`status`,`itemGroup`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (13,'222','Template','Products','sheik','2022-02-11 10:46:52','sheik','2022-02-11 10:46:59');
/*!40000 ALTER TABLE `itemprice001mb` ENABLE KEYS */;


--
-- Definition of table `itempricereport001hb`
--

DROP TABLE IF EXISTS `itempricereport001hb`;
CREATE TABLE `itempricereport001hb` (
  `itpricesId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `UOM` varchar(30) NOT NULL,
  `lstPurchase` varchar(40) NOT NULL,
  `valuationRate` decimal(12,4) DEFAULT NULL,
  `spList` varchar(50) NOT NULL,
  `ppList` varchar(50) NOT NULL,
  `bomRate` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`itpricesId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itempricereport001hb`
--

/*!40000 ALTER TABLE `itempricereport001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `itempricereport001hb` ENABLE KEYS */;


--
-- Definition of table `itempricereport001mb`
--

DROP TABLE IF EXISTS `itempricereport001mb`;
CREATE TABLE `itempricereport001mb` (
  `itpricesId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `UOM` varchar(30) NOT NULL,
  `lstPurchase` varchar(40) NOT NULL,
  `valuationRate` decimal(12,4) DEFAULT NULL,
  `spList` varchar(50) NOT NULL,
  `ppList` varchar(50) NOT NULL,
  `bomRate` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`itpricesId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itempricereport001mb`
--

/*!40000 ALTER TABLE `itempricereport001mb` DISABLE KEYS */;
INSERT INTO `itempricereport001mb` (`itpricesId`,`itemCode`,`itemGroup`,`description`,`UOM`,`lstPurchase`,`valuationRate`,`spList`,`ppList`,`bomRate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (5,'222','Raw Materials','FWREFWFGFFGS','SHEIK','2454','132.0000','75','154','13245.0000','sheik','2022-02-11 11:59:26','sheik','2022-02-11 11:59:34');
/*!40000 ALTER TABLE `itempricereport001mb` ENABLE KEYS */;


--
-- Definition of table `itempuhist001hb`
--

DROP TABLE IF EXISTS `itempuhist001hb`;
CREATE TABLE `itempuhist001hb` (
  `histId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(40) NOT NULL,
  `itemGroup` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `uom` varchar(20) NOT NULL,
  `poSeries` varchar(40) DEFAULT NULL,
  `supplier` varchar(40) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  `quantity` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `transDate` datetime DEFAULT NULL,
  `receivedqty` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`histId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itempuhist001hb`
--

/*!40000 ALTER TABLE `itempuhist001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `itempuhist001hb` ENABLE KEYS */;


--
-- Definition of table `itempuhist001mb`
--

DROP TABLE IF EXISTS `itempuhist001mb`;
CREATE TABLE `itempuhist001mb` (
  `histId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(40) NOT NULL,
  `itemGroup` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `uom` varchar(20) NOT NULL,
  `poSeries` varchar(40) DEFAULT NULL,
  `supplier` varchar(40) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  `quantity` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `transDate` datetime DEFAULT NULL,
  `receivedqty` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`histId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itempuhist001mb`
--

/*!40000 ALTER TABLE `itempuhist001mb` DISABLE KEYS */;
INSERT INTO `itempuhist001mb` (`histId`,`itemCode`,`itemGroup`,`description`,`uom`,`poSeries`,`supplier`,`company`,`quantity`,`date`,`amount`,`transDate`,`receivedqty`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (5,'2424','Raw Materials','DAD','SHEIK','Material Transfer','New World Reality','NANDALALA',5,'2022-02-14 18:30:00',10000,'2022-02-17 18:30:00',4352,'sheik','2022-02-11 06:19:53','sheik','2022-02-11 06:20:11');
/*!40000 ALTER TABLE `itempuhist001mb` ENABLE KEYS */;


--
-- Definition of table `itemshortagerep001hb`
--

DROP TABLE IF EXISTS `itemshortagerep001hb`;
CREATE TABLE `itemshortagerep001hb` (
  `shrepId` int(11) NOT NULL AUTO_INCREMENT,
  `warehouseName` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `actualQty` decimal(12,4) DEFAULT NULL,
  `orderedQty` decimal(12,4) DEFAULT NULL,
  `plannedQty` decimal(12,4) DEFAULT NULL,
  `reservedQty` decimal(12,4) DEFAULT NULL,
  `projectedQty` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`shrepId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemshortagerep001hb`
--

/*!40000 ALTER TABLE `itemshortagerep001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemshortagerep001hb` ENABLE KEYS */;


--
-- Definition of table `itemshortagerep001mb`
--

DROP TABLE IF EXISTS `itemshortagerep001mb`;
CREATE TABLE `itemshortagerep001mb` (
  `shrepId` int(11) NOT NULL AUTO_INCREMENT,
  `warehouseName` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `actualQty` decimal(12,4) DEFAULT NULL,
  `orderedQty` decimal(12,4) DEFAULT NULL,
  `plannedQty` decimal(12,4) DEFAULT NULL,
  `reservedQty` decimal(12,4) DEFAULT NULL,
  `projectedQty` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`shrepId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemshortagerep001mb`
--

/*!40000 ALTER TABLE `itemshortagerep001mb` DISABLE KEYS */;
INSERT INTO `itemshortagerep001mb` (`shrepId`,`warehouseName`,`itemCode`,`actualQty`,`orderedQty`,`plannedQty`,`reservedQty`,`projectedQty`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,'SAD','222','867.0000','5464.0000','5.0000','1346.0000','785.0000','sheik','2022-02-11 11:56:46','sheik','2022-02-11 11:56:54');
/*!40000 ALTER TABLE `itemshortagerep001mb` ENABLE KEYS */;


--
-- Definition of table `itemst001hb`
--

DROP TABLE IF EXISTS `itemst001hb`;
CREATE TABLE `itemst001hb` (
  `itemstId` int(11) NOT NULL AUTO_INCREMENT,
  `itemcode` varchar(50) NOT NULL,
  `status` varchar(30) NOT NULL,
  `itemGroup` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`itemstId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemst001hb`
--

/*!40000 ALTER TABLE `itemst001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemst001hb` ENABLE KEYS */;


--
-- Definition of table `itemst001mb`
--

DROP TABLE IF EXISTS `itemst001mb`;
CREATE TABLE `itemst001mb` (
  `itemstId` int(11) NOT NULL AUTO_INCREMENT,
  `itemcode` varchar(50) NOT NULL,
  `status` varchar(30) NOT NULL,
  `itemGroup` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`itemstId`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemst001mb`
--

/*!40000 ALTER TABLE `itemst001mb` DISABLE KEYS */;
INSERT INTO `itemst001mb` (`itemstId`,`itemcode`,`status`,`itemGroup`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (24,'Dummy2','Enabled','Products','','0000-00-00 00:00:00',NULL,NULL),
 (25,'Dummy1','Enabled','Products','','0000-00-00 00:00:00',NULL,NULL),
 (26,'seg','Enabled','Raw Materials','insertuser','2021-09-01 15:12:21','updateuser','2021-09-01 15:12:38'),
 (27,'qqqqqqqq','Enabled','Products','insertuser','2021-09-06 17:19:05',NULL,NULL),
 (28,'123','Enabled','Raw Materials','siva','2022-10-20 15:26:45',NULL,NULL);
/*!40000 ALTER TABLE `itemst001mb` ENABLE KEYS */;


--
-- Definition of table `itemwiselevel001hb`
--

DROP TABLE IF EXISTS `itemwiselevel001hb`;
CREATE TABLE `itemwiselevel001hb` (
  `iwlId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `safetyStk` varchar(50) NOT NULL,
  `leadtimeDays` decimal(12,4) DEFAULT NULL,
  `consumed` decimal(12,4) DEFAULT NULL,
  `delivered` decimal(12,4) DEFAULT NULL,
  `totalOutgoing` decimal(12,4) DEFAULT NULL,
  `avgdailyOutgoing` decimal(12,4) DEFAULT NULL,
  `reorderLevel` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`iwlId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemwiselevel001hb`
--

/*!40000 ALTER TABLE `itemwiselevel001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemwiselevel001hb` ENABLE KEYS */;


--
-- Definition of table `itemwiselevel001mb`
--

DROP TABLE IF EXISTS `itemwiselevel001mb`;
CREATE TABLE `itemwiselevel001mb` (
  `iwlId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `safetyStk` varchar(50) NOT NULL,
  `leadtimeDays` decimal(12,4) DEFAULT NULL,
  `consumed` decimal(12,4) DEFAULT NULL,
  `delivered` decimal(12,4) DEFAULT NULL,
  `totalOutgoing` decimal(12,4) DEFAULT NULL,
  `avgdailyOutgoing` decimal(12,4) DEFAULT NULL,
  `reorderLevel` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`iwlId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemwiselevel001mb`
--

/*!40000 ALTER TABLE `itemwiselevel001mb` DISABLE KEYS */;
INSERT INTO `itemwiselevel001mb` (`iwlId`,`itemCode`,`description`,`safetyStk`,`leadtimeDays`,`consumed`,`delivered`,`totalOutgoing`,`avgdailyOutgoing`,`reorderLevel`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (3,'222','ASGVAS','ASGFA','8775.0000','52465.0000','85748.0000','7845.0000','12354.0000','78768','sheik','2022-02-11 12:00:10','sheik','2022-02-11 12:00:19');
/*!40000 ALTER TABLE `itemwiselevel001mb` ENABLE KEYS */;


--
-- Definition of table `itemwisepurregister001hb`
--

DROP TABLE IF EXISTS `itemwisepurregister001hb`;
CREATE TABLE `itemwisepurregister001hb` (
  `iwprId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `inVoice` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `projectname` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `poSeries` varchar(50) NOT NULL,
  `purtName` varchar(50) NOT NULL,
  `rate` decimal(12,4) DEFAULT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `totalTax` decimal(12,4) DEFAULT NULL,
  `total` decimal(12,4) DEFAULT NULL,
  `currency` varchar(50) NOT NULL,
  `postingDate` datetime NOT NULL,
  `payAccount` int(11) NOT NULL,
  `expenseAccount` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`iwprId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemwisepurregister001hb`
--

/*!40000 ALTER TABLE `itemwisepurregister001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemwisepurregister001hb` ENABLE KEYS */;


--
-- Definition of table `itemwisepurregister001mb`
--

DROP TABLE IF EXISTS `itemwisepurregister001mb`;
CREATE TABLE `itemwisepurregister001mb` (
  `iwprId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `inVoice` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `projectname` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `poSeries` varchar(50) NOT NULL,
  `purtName` varchar(50) NOT NULL,
  `rate` decimal(12,4) DEFAULT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `totalTax` decimal(12,4) DEFAULT NULL,
  `total` decimal(12,4) DEFAULT NULL,
  `currency` varchar(50) NOT NULL,
  `postingDate` datetime NOT NULL,
  `payAccount` int(11) NOT NULL,
  `expenseAccount` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`iwprId`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemwisepurregister001mb`
--

/*!40000 ALTER TABLE `itemwisepurregister001mb` DISABLE KEYS */;
INSERT INTO `itemwisepurregister001mb` (`iwprId`,`itemCode`,`itemGroup`,`inVoice`,`supName`,`paymentMode`,`projectname`,`company`,`poSeries`,`purtName`,`rate`,`amount`,`totalTax`,`total`,`currency`,`postingDate`,`payAccount`,`expenseAccount`,`quantity`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (19,'Dummy1','Hardware','6','Distributor','Cash','Dummy3','NANDALALA','Dummy3','Dummy2','1000.0000','2000.0000','321654.0000','2000.0000','Dummy1','2022-02-22 18:30:00',456,4564,5,'sheik','2022-02-10 16:17:13','sheik','2022-02-10 16:17:28');
/*!40000 ALTER TABLE `itemwisepurregister001mb` ENABLE KEYS */;


--
-- Definition of table `jounalentry001hb`
--

DROP TABLE IF EXISTS `jounalentry001hb`;
CREATE TABLE `jounalentry001hb` (
  `jeId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `status` varchar(50) NOT NULL,
  `referenceNumber` varchar(50) NOT NULL,
  `jeSeries` varchar(50) NOT NULL,
  `accountName` varchar(50) NOT NULL,
  `partyName` varchar(50) NOT NULL,
  `docStatus` varchar(50) NOT NULL,
  `postingDate` datetime NOT NULL,
  `referenceDate` datetime NOT NULL,
  `credit` int(11) NOT NULL,
  `debit` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`jeId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jounalentry001hb`
--

/*!40000 ALTER TABLE `jounalentry001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `jounalentry001hb` ENABLE KEYS */;


--
-- Definition of table `jounalentry001mb`
--

DROP TABLE IF EXISTS `jounalentry001mb`;
CREATE TABLE `jounalentry001mb` (
  `jeId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `status` varchar(50) NOT NULL,
  `referenceNumber` varchar(50) NOT NULL,
  `jeSeries` varchar(50) NOT NULL,
  `accountName` varchar(50) NOT NULL,
  `partyName` varchar(50) NOT NULL,
  `docStatus` varchar(50) NOT NULL,
  `postingDate` datetime NOT NULL,
  `referenceDate` datetime NOT NULL,
  `credit` int(11) NOT NULL,
  `debit` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`jeId`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jounalentry001mb`
--

/*!40000 ALTER TABLE `jounalentry001mb` DISABLE KEYS */;
INSERT INTO `jounalentry001mb` (`jeId`,`title`,`status`,`referenceNumber`,`jeSeries`,`accountName`,`partyName`,`docStatus`,`postingDate`,`referenceDate`,`credit`,`debit`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (25,'NA','Bank Entry','54','12','Savings','Dummy1','Stopped','2022-02-16 18:30:00','2022-02-14 18:30:00',4234,4545,'latha','2022-02-10 00:45:38','latha','2022-02-10 00:45:50'),
 (26,'account','Debit Note','756','6456','Current','Dummy2','In-Process','2022-10-12 00:00:00','2022-10-28 00:00:00',354,545,'siva','2022-10-20 15:38:59',NULL,NULL);
/*!40000 ALTER TABLE `jounalentry001mb` ENABLE KEYS */;


--
-- Definition of table `landcostvouch001hb`
--

DROP TABLE IF EXISTS `landcostvouch001hb`;
CREATE TABLE `landcostvouch001hb` (
  `vouchId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(50) NOT NULL,
  `company` varchar(40) NOT NULL,
  `recptdocType` varchar(50) NOT NULL,
  `recptdoc` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `grandTotal` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`vouchId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `landcostvouch001hb`
--

/*!40000 ALTER TABLE `landcostvouch001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `landcostvouch001hb` ENABLE KEYS */;


--
-- Definition of table `landcostvouch001mb`
--

DROP TABLE IF EXISTS `landcostvouch001mb`;
CREATE TABLE `landcostvouch001mb` (
  `vouchId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(50) NOT NULL,
  `company` varchar(40) NOT NULL,
  `recptdocType` varchar(50) NOT NULL,
  `recptdoc` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `grandTotal` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`vouchId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `landcostvouch001mb`
--

/*!40000 ALTER TABLE `landcostvouch001mb` DISABLE KEYS */;
INSERT INTO `landcostvouch001mb` (`vouchId`,`series`,`company`,`recptdocType`,`recptdoc`,`supName`,`grandTotal`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (3,'65','wipro','Purchase Order','5455454','KSMerchandise',6583,'siva','2022-10-20 17:51:24',NULL,NULL);
/*!40000 ALTER TABLE `landcostvouch001mb` ENABLE KEYS */;


--
-- Definition of table `lead001hb`
--

DROP TABLE IF EXISTS `lead001hb`;
CREATE TABLE `lead001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personname` varchar(30) NOT NULL,
  `organisationname` varchar(30) NOT NULL,
  `status` varchar(30) NOT NULL,
  `source` varchar(30) NOT NULL,
  `leadowner` varchar(50) NOT NULL,
  `nextcontactby` varchar(50) DEFAULT NULL,
  `leadtype` varchar(50) DEFAULT NULL,
  `marketsegment` varchar(50) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lead001hb`
--

/*!40000 ALTER TABLE `lead001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `lead001hb` ENABLE KEYS */;


--
-- Definition of table `lead001mb`
--

DROP TABLE IF EXISTS `lead001mb`;
CREATE TABLE `lead001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personname` varchar(30) NOT NULL,
  `organisationname` varchar(30) NOT NULL,
  `status` varchar(30) NOT NULL,
  `source` varchar(30) NOT NULL,
  `leadowner` varchar(50) NOT NULL,
  `nextcontactby` varchar(50) DEFAULT NULL,
  `leadtype` varchar(50) DEFAULT NULL,
  `marketsegment` varchar(50) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lead001mb`
--

/*!40000 ALTER TABLE `lead001mb` DISABLE KEYS */;
INSERT INTO `lead001mb` (`id`,`personname`,`organisationname`,`status`,`source`,`leadowner`,`nextcontactby`,`leadtype`,`marketsegment`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (26,'SHEIK','SHEIK','GOD','BETTER','SHEIK','SIVA','GOOD','VERRY GOOD PERSON','sheik','2022-02-11 12:57:38','sheik','2022-02-11 12:57:50');
/*!40000 ALTER TABLE `lead001mb` ENABLE KEYS */;


--
-- Definition of table `leaddetail001hb`
--

DROP TABLE IF EXISTS `leaddetail001hb`;
CREATE TABLE `leaddetail001hb` (
  `leadId` int(11) NOT NULL AUTO_INCREMENT,
  `leadName` varchar(40) NOT NULL,
  `companyName` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `state` varchar(40) NOT NULL,
  `country` varchar(50) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `mobileNo` varchar(15) DEFAULT NULL,
  `email` varchar(40) NOT NULL,
  `leadOwner` varchar(50) NOT NULL,
  `terName` varchar(40) NOT NULL,
  `pinCode` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`leadId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leaddetail001hb`
--

/*!40000 ALTER TABLE `leaddetail001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `leaddetail001hb` ENABLE KEYS */;


--
-- Definition of table `leaddetail001mb`
--

DROP TABLE IF EXISTS `leaddetail001mb`;
CREATE TABLE `leaddetail001mb` (
  `leadId` int(11) NOT NULL AUTO_INCREMENT,
  `leadName` varchar(40) NOT NULL,
  `companyName` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `state` varchar(40) NOT NULL,
  `country` varchar(50) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `mobileNo` varchar(15) DEFAULT NULL,
  `email` varchar(40) NOT NULL,
  `leadOwner` varchar(50) NOT NULL,
  `terName` varchar(40) NOT NULL,
  `pinCode` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`leadId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leaddetail001mb`
--

/*!40000 ALTER TABLE `leaddetail001mb` DISABLE KEYS */;
INSERT INTO `leaddetail001mb` (`leadId`,`leadName`,`companyName`,`status`,`address`,`state`,`country`,`phone`,`mobileNo`,`email`,`leadOwner`,`terName`,`pinCode`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (5,'SHEIK','NANDALALA','Open','GVGFDHFHG','TAMILNADU','INDIA','9025762102','9443534054','nandalalainfotech@gmail.com','HGBFDUYHQFE','GHNGdgedge',621218,'sheik','2022-02-11 10:08:00','sheik','2022-02-11 10:08:49');
/*!40000 ALTER TABLE `leaddetail001mb` ENABLE KEYS */;


--
-- Definition of table `leaveapp001hb`
--

DROP TABLE IF EXISTS `leaveapp001hb`;
CREATE TABLE `leaveapp001hb` (
  `lvappId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(30) NOT NULL,
  `leaveType` varchar(30) NOT NULL,
  `reason` varchar(30) NOT NULL,
  `leaveApprover` varchar(30) NOT NULL,
  `sNo` int(11) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `fromDate` datetime NOT NULL,
  `toDate` datetime NOT NULL,
  `postingDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`lvappId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leaveapp001hb`
--

/*!40000 ALTER TABLE `leaveapp001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `leaveapp001hb` ENABLE KEYS */;


--
-- Definition of table `leaveapp001mb`
--

DROP TABLE IF EXISTS `leaveapp001mb`;
CREATE TABLE `leaveapp001mb` (
  `lvappId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(30) NOT NULL,
  `leaveType` varchar(30) NOT NULL,
  `reason` varchar(30) NOT NULL,
  `leaveApprover` varchar(30) NOT NULL,
  `sNo` int(11) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  `empNumber` varchar(255) DEFAULT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `fromDate` datetime NOT NULL,
  `toDate` datetime NOT NULL,
  `postingDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`lvappId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leaveapp001mb`
--

/*!40000 ALTER TABLE `leaveapp001mb` DISABLE KEYS */;
INSERT INTO `leaveapp001mb` (`lvappId`,`series`,`leaveType`,`reason`,`leaveApprover`,`sNo`,`company`,`empNumber`,`deptName`,`fromDate`,`toDate`,`postingDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (36,'45','Dummy1','VERY GOOD IMPRESSION','Dummy2',NULL,'NANDALALA','Dummy1','ELECTRICAL','2022-02-13 18:30:00','2022-02-21 18:30:00','2022-02-13 18:30:00','sheik','2022-02-11 07:23:20','sheik','2022-02-11 07:23:46');
/*!40000 ALTER TABLE `leaveapp001mb` ENABLE KEYS */;


--
-- Definition of table `leavetype001hb`
--

DROP TABLE IF EXISTS `leavetype001hb`;
CREATE TABLE `leavetype001hb` (
  `lvtypeId` int(11) NOT NULL AUTO_INCREMENT,
  `lvtypeName` varchar(30) NOT NULL,
  `maxdaysAllowed` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`lvtypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leavetype001hb`
--

/*!40000 ALTER TABLE `leavetype001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `leavetype001hb` ENABLE KEYS */;


--
-- Definition of table `leavetype001mb`
--

DROP TABLE IF EXISTS `leavetype001mb`;
CREATE TABLE `leavetype001mb` (
  `lvtypeId` int(11) NOT NULL AUTO_INCREMENT,
  `lvtypeName` varchar(30) NOT NULL,
  `maxdaysAllowed` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`lvtypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leavetype001mb`
--

/*!40000 ALTER TABLE `leavetype001mb` DISABLE KEYS */;
INSERT INTO `leavetype001mb` (`lvtypeId`,`lvtypeName`,`maxdaysAllowed`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (17,'Vacation',20212,'sheik','2022-02-11 07:24:05','sheik','2022-02-11 07:24:48');
/*!40000 ALTER TABLE `leavetype001mb` ENABLE KEYS */;


--
-- Definition of table `login001hb`
--

DROP TABLE IF EXISTS `login001hb`;
CREATE TABLE `login001hb` (
  `login_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` smallint(6) DEFAULT NULL,
  `domain` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login001hb`
--

/*!40000 ALTER TABLE `login001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `login001hb` ENABLE KEYS */;


--
-- Definition of table `login001mb`
--

DROP TABLE IF EXISTS `login001mb`;
CREATE TABLE `login001mb` (
  `login_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` smallint(6) DEFAULT NULL,
  `domain` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login001mb`
--

/*!40000 ALTER TABLE `login001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `login001mb` ENABLE KEYS */;


--
-- Definition of table `lvblocklist001hb`
--

DROP TABLE IF EXISTS `lvblocklist001hb`;
CREATE TABLE `lvblocklist001hb` (
  `lvblockId` int(11) NOT NULL AUTO_INCREMENT,
  `blockName` varchar(30) NOT NULL,
  `sNo` int(11) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`lvblockId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lvblocklist001hb`
--

/*!40000 ALTER TABLE `lvblocklist001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `lvblocklist001hb` ENABLE KEYS */;


--
-- Definition of table `lvblocklist001mb`
--

DROP TABLE IF EXISTS `lvblocklist001mb`;
CREATE TABLE `lvblocklist001mb` (
  `lvblockId` int(11) NOT NULL AUTO_INCREMENT,
  `blockName` varchar(30) NOT NULL,
  `sNo` int(11) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`lvblockId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lvblocklist001mb`
--

/*!40000 ALTER TABLE `lvblocklist001mb` DISABLE KEYS */;
INSERT INTO `lvblocklist001mb` (`lvblockId`,`blockName`,`sNo`,`company`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (18,'SHEIK',NULL,'Dummy3','sheik','2022-02-11 07:25:35','sheik','2022-02-11 07:25:42');
/*!40000 ALTER TABLE `lvblocklist001mb` ENABLE KEYS */;


--
-- Definition of table `manufactureset001hb`
--

DROP TABLE IF EXISTS `manufactureset001hb`;
CREATE TABLE `manufactureset001hb` (
  `mansetId` int(11) NOT NULL AUTO_INCREMENT,
  `prodPercent` decimal(12,4) NOT NULL,
  `backflushRM` varchar(40) NOT NULL,
  `capacityPlan` varchar(30) NOT NULL,
  `timebwOpern` varchar(30) DEFAULT NULL,
  `defworkinProgWH` varchar(50) NOT NULL,
  `defFingoodsWH` varchar(50) NOT NULL,
  `disableCPandTT` char(20) NOT NULL,
  `allowOT` char(20) NOT NULL,
  `allowProdinholy` char(20) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`mansetId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manufactureset001hb`
--

/*!40000 ALTER TABLE `manufactureset001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `manufactureset001hb` ENABLE KEYS */;


--
-- Definition of table `manufactureset001mb`
--

DROP TABLE IF EXISTS `manufactureset001mb`;
CREATE TABLE `manufactureset001mb` (
  `mansetId` int(11) NOT NULL AUTO_INCREMENT,
  `prodPercent` decimal(12,4) NOT NULL,
  `backflushRM` varchar(40) NOT NULL,
  `capacityPlan` varchar(30) NOT NULL,
  `timebwOpern` varchar(30) DEFAULT NULL,
  `defworkinProgWH` varchar(50) NOT NULL,
  `defFingoodsWH` varchar(50) NOT NULL,
  `disableCPandTT` char(20) NOT NULL,
  `allowOT` char(20) NOT NULL,
  `allowProdinholy` char(20) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`mansetId`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manufactureset001mb`
--

/*!40000 ALTER TABLE `manufactureset001mb` DISABLE KEYS */;
INSERT INTO `manufactureset001mb` (`mansetId`,`prodPercent`,`backflushRM`,`capacityPlan`,`timebwOpern`,`defworkinProgWH`,`defFingoodsWH`,`disableCPandTT`,`allowOT`,`allowProdinholy`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (31,'100.0000','sheik','2000','10','All Warehouses-WPL','Sales-WPL','1','0','1','latha','2022-02-09 23:23:08','latha','2022-02-09 23:25:15'),
 (32,'1000.0000','sheik','200','10,.50','Sales-WPL','Work-in Progress-WPL','1','1','1','latha','2022-02-09 23:25:45',NULL,NULL),
 (33,'464.0000','5435','5434','false','Supplier-WPL','Work-in Progress-WPL','1','0','0','siva','2022-10-20 15:30:14',NULL,NULL),
 (34,'43.0000','54354','5434','false','Sales-WPL','Finished Goods-WPL','1','1','1','siva','2022-10-28 12:01:42',NULL,NULL),
 (35,'464.0000','5435','5434','false','Sales-WPL','Sales-WPL','1','1','1','siva','2022-11-16 15:18:29',NULL,NULL);
/*!40000 ALTER TABLE `manufactureset001mb` ENABLE KEYS */;


--
-- Definition of table `matchpayment001hb`
--

DROP TABLE IF EXISTS `matchpayment001hb`;
CREATE TABLE `matchpayment001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `company` varchar(45) NOT NULL,
  `partytype` varchar(45) NOT NULL,
  `party` varchar(45) NOT NULL,
  `receivableorpayableaccount` varchar(45) NOT NULL,
  `bankorcashaccount` varchar(45) NOT NULL,
  `minimuminvoiceamount` int(10) unsigned NOT NULL,
  `maximuminvoiceamount` int(10) unsigned NOT NULL,
  `refName` varchar(50) NOT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `allocatedamount` decimal(12,4) DEFAULT NULL,
  `fromdate` datetime NOT NULL,
  `todate` datetime NOT NULL,
  `invoiceNumber` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `matchpayment001hb`
--

/*!40000 ALTER TABLE `matchpayment001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `matchpayment001hb` ENABLE KEYS */;


--
-- Definition of table `matchpayment001mb`
--

DROP TABLE IF EXISTS `matchpayment001mb`;
CREATE TABLE `matchpayment001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `company` varchar(45) NOT NULL,
  `partytype` varchar(45) NOT NULL,
  `party` varchar(45) NOT NULL,
  `receivableorpayableaccount` varchar(45) NOT NULL,
  `bankorcashaccount` varchar(45) NOT NULL,
  `minimuminvoiceamount` int(10) unsigned NOT NULL,
  `maximuminvoiceamount` int(10) unsigned NOT NULL,
  `refName` varchar(50) NOT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `allocatedamount` decimal(12,4) DEFAULT NULL,
  `fromdate` datetime NOT NULL,
  `todate` datetime NOT NULL,
  `invoiceNumber` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `matchpayment001mb`
--

/*!40000 ALTER TABLE `matchpayment001mb` DISABLE KEYS */;
INSERT INTO `matchpayment001mb` (`id`,`company`,`partytype`,`party`,`receivableorpayableaccount`,`bankorcashaccount`,`minimuminvoiceamount`,`maximuminvoiceamount`,`refName`,`amount`,`allocatedamount`,`fromdate`,`todate`,`invoiceNumber`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (13,'NANDALALA','Customer','Dummy1','Payable','Payable',43545,5656,'sheik','1000.0000','5465542.0000','2022-02-15 18:30:00','2022-02-23 18:30:00',787564,'sheik','2022-02-10 16:09:17','sheik','2022-02-10 16:09:37');
/*!40000 ALTER TABLE `matchpayment001mb` ENABLE KEYS */;


--
-- Definition of table `materialrequest001hb`
--

DROP TABLE IF EXISTS `materialrequest001hb`;
CREATE TABLE `materialrequest001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(30) NOT NULL,
  `warehouse` varchar(30) NOT NULL,
  `actual` int(30) NOT NULL,
  `requested` int(30) NOT NULL,
  `reserved` int(30) NOT NULL,
  `ordered` int(30) NOT NULL,
  `projected` int(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `materialrequest001hb`
--

/*!40000 ALTER TABLE `materialrequest001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `materialrequest001hb` ENABLE KEYS */;


--
-- Definition of table `materialrequest001mb`
--

DROP TABLE IF EXISTS `materialrequest001mb`;
CREATE TABLE `materialrequest001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(30) NOT NULL,
  `warehouse` varchar(30) NOT NULL,
  `actual` int(30) NOT NULL,
  `requested` int(30) NOT NULL,
  `reserved` int(30) NOT NULL,
  `ordered` int(30) NOT NULL,
  `projected` int(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `materialrequest001mb`
--

/*!40000 ALTER TABLE `materialrequest001mb` DISABLE KEYS */;
INSERT INTO `materialrequest001mb` (`id`,`item`,`warehouse`,`actual`,`requested`,`reserved`,`ordered`,`projected`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'material','spl',12,20,10,25,15,'','0000-00-00 00:00:00',NULL,NULL),
 (3,'shaft','spl-warehouse',45,45,93,70,60,'','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `materialrequest001mb` ENABLE KEYS */;


--
-- Definition of table `matreqsunotcreate001hb`
--

DROP TABLE IF EXISTS `matreqsunotcreate001hb`;
CREATE TABLE `matreqsunotcreate001hb` (
  `mrsId` int(11) NOT NULL AUTO_INCREMENT,
  `mrSeries` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`mrsId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `matreqsunotcreate001hb`
--

/*!40000 ALTER TABLE `matreqsunotcreate001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `matreqsunotcreate001hb` ENABLE KEYS */;


--
-- Definition of table `matreqsunotcreate001mb`
--

DROP TABLE IF EXISTS `matreqsunotcreate001mb`;
CREATE TABLE `matreqsunotcreate001mb` (
  `mrsId` int(11) NOT NULL AUTO_INCREMENT,
  `mrSeries` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`mrsId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `matreqsunotcreate001mb`
--

/*!40000 ALTER TABLE `matreqsunotcreate001mb` DISABLE KEYS */;
INSERT INTO `matreqsunotcreate001mb` (`mrsId`,`mrSeries`,`itemCode`,`description`,`company`,`date`,`quantity`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (3,'544','2424','GOOD','NANDALALA','2022-02-14 18:30:00',6,'sheik','2022-02-11 06:19:06','sheik','2022-02-11 06:19:16');
/*!40000 ALTER TABLE `matreqsunotcreate001mb` ENABLE KEYS */;


--
-- Definition of table `menu001hb`
--

DROP TABLE IF EXISTS `menu001hb`;
CREATE TABLE `menu001hb` (
  `menuid` int(10) NOT NULL AUTO_INCREMENT,
  `menuname` varchar(25) NOT NULL,
  `menulink` varchar(75) DEFAULT NULL,
  `menutype` enum('Main-Menu','Child-Menu','Page-Main-Menu','Page-Child-Menu') DEFAULT NULL,
  `parentid` int(10) DEFAULT '0',
  `parentname` varchar(25) DEFAULT NULL,
  `domain` varchar(25) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`menuid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu001hb`
--

/*!40000 ALTER TABLE `menu001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu001hb` ENABLE KEYS */;


--
-- Definition of table `menu001mb`
--

DROP TABLE IF EXISTS `menu001mb`;
CREATE TABLE `menu001mb` (
  `menuid` int(10) NOT NULL AUTO_INCREMENT,
  `menuname` varchar(25) NOT NULL,
  `menulink` varchar(75) DEFAULT NULL,
  `menutype` enum('Main-Menu','Child-Menu','Page-Main-Menu','Page-Child-Menu') DEFAULT NULL,
  `parentid` int(10) DEFAULT '0',
  `parentname` varchar(25) DEFAULT NULL,
  `domain` varchar(25) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`menuid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu001mb`
--

/*!40000 ALTER TABLE `menu001mb` DISABLE KEYS */;
INSERT INTO `menu001mb` (`menuid`,`menuname`,`menulink`,`menutype`,`parentid`,`parentname`,`domain`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'Manufacturing',NULL,'Main-Menu',0,NULL,'Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (2,'Production','/TestAndReportStudio/ProdOrderDetails/prodorder','Child-Menu',1,'Manufacturing','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (3,'Bill of Materials','/TestAndReportStudio/BomDetails/billofmaterial?menulink=manufacturing','Child-Menu',1,'Manufacturing','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (4,'Tools','/TestAndReportStudio/BomDetails/manufacturetools','Child-Menu',1,'Manufacturing','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (5,'SetUp','/TestAndReportStudio/ManufactureDetails/manufacture','Child-Menu',1,'Manufacturing','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (6,'Reports','/TestAndReportStudio/ProductionReportDetails/openprorder','Child-Menu',1,'Manufacturing','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (7,'Help',NULL,'Child-Menu',1,'Manufacturing','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (8,'Accounts',NULL,'Main-Menu',0,NULL,'Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (9,'Billing','/TestAndReportStudio/Billing/accountsreceivable','Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (10,'Company and Accounts','/TestAndReportStudio/CompanyAndAccounts/generalledger','Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (11,'Masters','/TestAndReportStudio/Masters/asset','Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (12,'Accounting Statements','/TestAndReportStudio/AccountingStatements/trialbalance','Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (13,'Banking Payments','/TestAndReportStudio/BankingAndPayments/updatebank','Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (14,'Taxes','/TestAndReportStudio/Taxes/salestaxes','Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (15,'Budget and Cost Center','/TestAndReportStudio/BudgetAndCostCenter/budgetvariancereport','Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (16,'Tools','/TestAndReportStudio/Tools/periodclosingvoucher','Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (17,'SetUp','/TestAndReportStudio/SetUp/setup','Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (18,'To Bill','/TestAndReportStudio/ToBill/ordereditemstobebilled?menulink=ToBill','Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (19,'Analytics','/TestAndReportStudio/GrossProfit/grossprofit?menulink=Analytics','Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (20,'Other Reports',NULL,'Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL),
 (21,'Help',NULL,'Child-Menu',8,'Accounts','Manufacturing','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `menu001mb` ENABLE KEYS */;


--
-- Definition of table `monthlyattendsheet001hb`
--

DROP TABLE IF EXISTS `monthlyattendsheet001hb`;
CREATE TABLE `monthlyattendsheet001hb` (
  `atsId` int(11) NOT NULL AUTO_INCREMENT,
  `empNumber` varchar(50) NOT NULL,
  `empName` varchar(50) NOT NULL,
  `branch` varchar(50) NOT NULL,
  `deptName` varchar(50) NOT NULL,
  `empDesign` varchar(50) NOT NULL,
  `empCompany` varchar(50) NOT NULL,
  `one1` varchar(10) DEFAULT NULL,
  `two2` varchar(10) DEFAULT NULL,
  `three3` varchar(10) DEFAULT NULL,
  `four4` varchar(10) DEFAULT NULL,
  `five5` varchar(10) DEFAULT NULL,
  `six6` varchar(10) DEFAULT NULL,
  `seven7` varchar(10) DEFAULT NULL,
  `eight8` varchar(10) DEFAULT NULL,
  `nine9` varchar(10) DEFAULT NULL,
  `ten10` varchar(10) DEFAULT NULL,
  `eleven11` varchar(10) DEFAULT NULL,
  `twelve12` varchar(10) DEFAULT NULL,
  `thirteen13` varchar(10) DEFAULT NULL,
  `fourteen14` varchar(10) DEFAULT NULL,
  `fifteen15` varchar(10) DEFAULT NULL,
  `sixteen16` varchar(10) DEFAULT NULL,
  `seventeen17` varchar(10) DEFAULT NULL,
  `eighteen18` varchar(10) DEFAULT NULL,
  `nineteen19` varchar(10) DEFAULT NULL,
  `twenty20` varchar(10) DEFAULT NULL,
  `twentyone21` varchar(10) DEFAULT NULL,
  `twentytwo22` varchar(10) DEFAULT NULL,
  `twentythree23` varchar(10) DEFAULT NULL,
  `twentyfour24` varchar(10) DEFAULT NULL,
  `twentyfive25` varchar(10) DEFAULT NULL,
  `twentysix26` varchar(10) DEFAULT NULL,
  `twentyseven27` varchar(10) DEFAULT NULL,
  `twentyeight28` varchar(10) DEFAULT NULL,
  `twentynine29` varchar(10) DEFAULT NULL,
  `thirty30` varchar(10) DEFAULT NULL,
  `totalPresent` decimal(12,4) DEFAULT NULL,
  `totalAbsent` decimal(12,4) DEFAULT NULL,
  `months` varchar(255) DEFAULT NULL,
  `attYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`atsId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `monthlyattendsheet001hb`
--

/*!40000 ALTER TABLE `monthlyattendsheet001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `monthlyattendsheet001hb` ENABLE KEYS */;


--
-- Definition of table `monthlyattendsheet001mb`
--

DROP TABLE IF EXISTS `monthlyattendsheet001mb`;
CREATE TABLE `monthlyattendsheet001mb` (
  `atsId` int(11) NOT NULL AUTO_INCREMENT,
  `empNumber` varchar(50) NOT NULL,
  `empName` varchar(50) NOT NULL,
  `branch` varchar(50) NOT NULL,
  `deptName` varchar(50) NOT NULL,
  `empDesign` varchar(50) NOT NULL,
  `empCompany` varchar(50) NOT NULL,
  `one1` varchar(10) DEFAULT NULL,
  `two2` varchar(10) DEFAULT NULL,
  `three3` varchar(10) DEFAULT NULL,
  `four4` varchar(10) DEFAULT NULL,
  `five5` varchar(10) DEFAULT NULL,
  `six6` varchar(10) DEFAULT NULL,
  `seven7` varchar(10) DEFAULT NULL,
  `eight8` varchar(10) DEFAULT NULL,
  `nine9` varchar(10) DEFAULT NULL,
  `ten10` varchar(10) DEFAULT NULL,
  `eleven11` varchar(10) DEFAULT NULL,
  `twelve12` varchar(10) DEFAULT NULL,
  `thirteen13` varchar(10) DEFAULT NULL,
  `fourteen14` varchar(10) DEFAULT NULL,
  `fifteen15` varchar(10) DEFAULT NULL,
  `sixteen16` varchar(10) DEFAULT NULL,
  `seventeen17` varchar(10) DEFAULT NULL,
  `eighteen18` varchar(10) DEFAULT NULL,
  `nineteen19` varchar(10) DEFAULT NULL,
  `twenty20` varchar(10) DEFAULT NULL,
  `twentyone21` varchar(10) DEFAULT NULL,
  `twentytwo22` varchar(10) DEFAULT NULL,
  `twentythree23` varchar(10) DEFAULT NULL,
  `twentyfour24` varchar(10) DEFAULT NULL,
  `twentyfive25` varchar(10) DEFAULT NULL,
  `twentysix26` varchar(10) DEFAULT NULL,
  `twentyseven27` varchar(10) DEFAULT NULL,
  `twentyeight28` varchar(10) DEFAULT NULL,
  `twentynine29` varchar(10) DEFAULT NULL,
  `thirty30` varchar(10) DEFAULT NULL,
  `totalPresent` decimal(12,4) DEFAULT NULL,
  `totalAbsent` decimal(12,4) DEFAULT NULL,
  `months` varchar(255) DEFAULT NULL,
  `attYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`atsId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `monthlyattendsheet001mb`
--

/*!40000 ALTER TABLE `monthlyattendsheet001mb` DISABLE KEYS */;
INSERT INTO `monthlyattendsheet001mb` (`atsId`,`empNumber`,`empName`,`branch`,`deptName`,`empDesign`,`empCompany`,`one1`,`two2`,`three3`,`four4`,`five5`,`six6`,`seven7`,`eight8`,`nine9`,`ten10`,`eleven11`,`twelve12`,`thirteen13`,`fourteen14`,`fifteen15`,`sixteen16`,`seventeen17`,`eighteen18`,`nineteen19`,`twenty20`,`twentyone21`,`twentytwo22`,`twentythree23`,`twentyfour24`,`twentyfive25`,`twentysix26`,`twentyseven27`,`twentyeight28`,`twentynine29`,`thirty30`,`totalPresent`,`totalAbsent`,`months`,`attYear`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,'Dummy2','Dummy2','Dummy1','Dummy1','Dummy2','Dummy2','23','32','44','12','43','23','32','12','67','56','45','56','76','12','22','43','54','54','54','54','43','23','42','34','23','34','11','34','12','43','34.0000','4143454.0000','May',2021,'sheik','2022-02-11 09:51:15','sheik','2022-02-11 09:51:38');
/*!40000 ALTER TABLE `monthlyattendsheet001mb` ENABLE KEYS */;


--
-- Definition of table `openprodorder001hb`
--

DROP TABLE IF EXISTS `openprodorder001hb`;
CREATE TABLE `openprodorder001hb` (
  `prodId` int(11) NOT NULL AUTO_INCREMENT,
  `prorderCode` varchar(30) NOT NULL,
  `itemtoManufacture` varchar(40) NOT NULL,
  `toProduce` varchar(30) DEFAULT NULL,
  `produced` varchar(30) NOT NULL,
  `empCompany` varchar(30) NOT NULL,
  `date` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prodId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `openprodorder001hb`
--

/*!40000 ALTER TABLE `openprodorder001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `openprodorder001hb` ENABLE KEYS */;


--
-- Definition of table `openprodorder001mb`
--

DROP TABLE IF EXISTS `openprodorder001mb`;
CREATE TABLE `openprodorder001mb` (
  `prodId` int(11) NOT NULL AUTO_INCREMENT,
  `prorderCode` varchar(30) NOT NULL,
  `itemtoManufacture` varchar(40) NOT NULL,
  `toProduce` varchar(30) DEFAULT NULL,
  `produced` varchar(30) NOT NULL,
  `empCompany` varchar(30) NOT NULL,
  `date` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prodId`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `openprodorder001mb`
--

/*!40000 ALTER TABLE `openprodorder001mb` DISABLE KEYS */;
INSERT INTO `openprodorder001mb` (`prodId`,`prorderCode`,`itemtoManufacture`,`toProduce`,`produced`,`empCompany`,`date`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (92,'Dummy3','edfsdgv','sdf','sdf','sd','2021-09-09 00:00:00','insertuser','2021-09-01 15:16:02','updateuser','2021-09-01 15:16:07'),
 (93,'Dummy2','selvam','aa','aa','jhnb','2021-09-16 00:00:00','insertuser','2021-09-08 17:47:15',NULL,NULL),
 (94,'Dummy1','popox','SMD','SHEIK','NANDALALA INFOTECH','2022-02-21 18:30:00','latha','2022-02-09 23:28:57','latha','2022-02-09 23:29:13');
/*!40000 ALTER TABLE `openprodorder001mb` ENABLE KEYS */;


--
-- Definition of table `operationbom001hb`
--

DROP TABLE IF EXISTS `operationbom001hb`;
CREATE TABLE `operationbom001hb` (
  `opId` int(11) NOT NULL AUTO_INCREMENT,
  `opName` varchar(50) NOT NULL,
  `workstName` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`opId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `operationbom001hb`
--

/*!40000 ALTER TABLE `operationbom001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `operationbom001hb` ENABLE KEYS */;


--
-- Definition of table `operationbom001mb`
--

DROP TABLE IF EXISTS `operationbom001mb`;
CREATE TABLE `operationbom001mb` (
  `opId` int(11) NOT NULL AUTO_INCREMENT,
  `opName` varchar(50) NOT NULL,
  `workstName` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`opId`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `operationbom001mb`
--

/*!40000 ALTER TABLE `operationbom001mb` DISABLE KEYS */;
INSERT INTO `operationbom001mb` (`opId`,`opName`,`workstName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (21,'null','null','','0000-00-00 00:00:00',NULL,NULL),
 (22,'null','null','','0000-00-00 00:00:00',NULL,NULL),
 (23,'aaa','null','insertuser','2021-09-01 15:13:43','updateuser','2021-09-01 15:13:59'),
 (24,'yy','null','insertuser','2021-09-08 17:41:14',NULL,NULL),
 (25,'ooo','scc','insertuser','2021-09-08 17:41:28',NULL,NULL),
 (26,'gdf','null','siva','2022-10-20 15:27:14',NULL,NULL);
/*!40000 ALTER TABLE `operationbom001mb` ENABLE KEYS */;


--
-- Definition of table `order001hb`
--

DROP TABLE IF EXISTS `order001hb`;
CREATE TABLE `order001hb` (
  `Orderid` int(11) NOT NULL AUTO_INCREMENT,
  `Ordername` varchar(50) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Orderid`),
  UNIQUE KEY `Ordername` (`Ordername`),
  UNIQUE KEY `IDX_3568b8d6f99a332cda5e2e2fdb` (`Ordername`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order001hb`
--

/*!40000 ALTER TABLE `order001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `order001hb` ENABLE KEYS */;


--
-- Definition of table `order001mb`
--

DROP TABLE IF EXISTS `order001mb`;
CREATE TABLE `order001mb` (
  `Orderid` int(11) NOT NULL AUTO_INCREMENT,
  `Ordername` varchar(50) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Orderid`),
  UNIQUE KEY `Ordername` (`Ordername`),
  UNIQUE KEY `IDX_3568b8d6f99a332cda5e2e2fdb` (`Ordername`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order001mb`
--

/*!40000 ALTER TABLE `order001mb` DISABLE KEYS */;
INSERT INTO `order001mb` (`Orderid`,`Ordername`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (31,'SHEIK JEFF','sheik','2022-02-11 12:18:16','sheik','2022-02-11 12:18:23'),
 (32,'SHEIK','sheik','2022-02-11 12:37:26',NULL,NULL);
/*!40000 ALTER TABLE `order001mb` ENABLE KEYS */;


--
-- Definition of table `orditemsdeliver001hb`
--

DROP TABLE IF EXISTS `orditemsdeliver001hb`;
CREATE TABLE `orditemsdeliver001hb` (
  `orditemsId` int(11) NOT NULL AUTO_INCREMENT,
  `sorderName` varchar(50) NOT NULL,
  `customername` varchar(50) NOT NULL,
  `projectName` varchar(50) DEFAULT NULL,
  `rate` decimal(12,4) DEFAULT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `amttoDeliver` decimal(12,4) DEFAULT NULL,
  `availableQty` varchar(50) NOT NULL,
  `projectedQty` varchar(40) DEFAULT NULL,
  `expectedQty` varchar(40) DEFAULT NULL,
  `itemCode` varchar(60) NOT NULL,
  `description` varchar(100) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `warehouseName` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `deliverQty` int(11) NOT NULL,
  `qtytoDeliver` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`orditemsId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orditemsdeliver001hb`
--

/*!40000 ALTER TABLE `orditemsdeliver001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `orditemsdeliver001hb` ENABLE KEYS */;


--
-- Definition of table `orditemsdeliver001mb`
--

DROP TABLE IF EXISTS `orditemsdeliver001mb`;
CREATE TABLE `orditemsdeliver001mb` (
  `orditemsId` int(11) NOT NULL AUTO_INCREMENT,
  `sorderName` varchar(50) NOT NULL,
  `customername` varchar(50) NOT NULL,
  `projectName` varchar(50) DEFAULT NULL,
  `rate` decimal(12,4) DEFAULT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `amttoDeliver` decimal(12,4) DEFAULT NULL,
  `availableQty` varchar(50) NOT NULL,
  `projectedQty` varchar(40) DEFAULT NULL,
  `expectedQty` varchar(40) DEFAULT NULL,
  `itemCode` varchar(60) NOT NULL,
  `description` varchar(100) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `warehouseName` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `deliverQty` int(11) NOT NULL,
  `qtytoDeliver` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`orditemsId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orditemsdeliver001mb`
--

/*!40000 ALTER TABLE `orditemsdeliver001mb` DISABLE KEYS */;
INSERT INTO `orditemsdeliver001mb` (`orditemsId`,`sorderName`,`customername`,`projectName`,`rate`,`amount`,`amttoDeliver`,`availableQty`,`projectedQty`,`expectedQty`,`itemCode`,`description`,`itemGroup`,`warehouseName`,`date`,`quantity`,`deliverQty`,`qtytoDeliver`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (2,'123','Dummy1','SHEIK','2000.0000','10000.0000','4578.0000','25','78','123','222','HYDFDFD','Hardware','SAD','2022-02-13 18:30:00',6,87,213,'sheik','2022-02-11 11:54:27','sheik','2022-02-11 11:54:34');
/*!40000 ALTER TABLE `orditemsdeliver001mb` ENABLE KEYS */;


--
-- Definition of table `packingslip001hb`
--

DROP TABLE IF EXISTS `packingslip001hb`;
CREATE TABLE `packingslip001hb` (
  `psId` int(11) NOT NULL AUTO_INCREMENT,
  `slipName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `delName` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`psId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `packingslip001hb`
--

/*!40000 ALTER TABLE `packingslip001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `packingslip001hb` ENABLE KEYS */;


--
-- Definition of table `packingslip001mb`
--

DROP TABLE IF EXISTS `packingslip001mb`;
CREATE TABLE `packingslip001mb` (
  `psId` int(11) NOT NULL AUTO_INCREMENT,
  `slipName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `delName` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`psId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `packingslip001mb`
--

/*!40000 ALTER TABLE `packingslip001mb` DISABLE KEYS */;
INSERT INTO `packingslip001mb` (`psId`,`slipName`,`status`,`delName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (2,'SHEIK','Queued for Saving','HJA','sheik','2022-02-11 11:19:01','sheik','2022-02-11 11:19:07'),
 (3,'raj','Queued for Saving','HJA','siva','2022-10-20 17:50:34',NULL,NULL);
/*!40000 ALTER TABLE `packingslip001mb` ENABLE KEYS */;


--
-- Definition of table `paygateaccount001hb`
--

DROP TABLE IF EXISTS `paygateaccount001hb`;
CREATE TABLE `paygateaccount001hb` (
  `paygateId` int(11) NOT NULL AUTO_INCREMENT,
  `accountName` varchar(50) NOT NULL,
  `defMessage` varchar(100) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`paygateId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paygateaccount001hb`
--

/*!40000 ALTER TABLE `paygateaccount001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `paygateaccount001hb` ENABLE KEYS */;


--
-- Definition of table `paygateaccount001mb`
--

DROP TABLE IF EXISTS `paygateaccount001mb`;
CREATE TABLE `paygateaccount001mb` (
  `paygateId` int(11) NOT NULL AUTO_INCREMENT,
  `accountName` varchar(50) NOT NULL,
  `defMessage` varchar(100) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`paygateId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paygateaccount001mb`
--

/*!40000 ALTER TABLE `paygateaccount001mb` DISABLE KEYS */;
INSERT INTO `paygateaccount001mb` (`paygateId`,`accountName`,`defMessage`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'Debtors','Payment in Process','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `paygateaccount001mb` ENABLE KEYS */;


--
-- Definition of table `paymententry001hb`
--

DROP TABLE IF EXISTS `paymententry001hb`;
CREATE TABLE `paymententry001hb` (
  `payentId` int(11) NOT NULL AUTO_INCREMENT,
  `entrySeries` varchar(50) NOT NULL,
  `paymentType` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `partyType` varchar(40) NOT NULL,
  `partyName` varchar(50) NOT NULL,
  `accpaidTo` varchar(50) NOT NULL,
  `postingDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`payentId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paymententry001hb`
--

/*!40000 ALTER TABLE `paymententry001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymententry001hb` ENABLE KEYS */;


--
-- Definition of table `paymententry001mb`
--

DROP TABLE IF EXISTS `paymententry001mb`;
CREATE TABLE `paymententry001mb` (
  `payentId` int(11) NOT NULL AUTO_INCREMENT,
  `entrySeries` varchar(50) NOT NULL,
  `paymentType` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `partyType` varchar(40) NOT NULL,
  `partyName` varchar(50) NOT NULL,
  `accpaidTo` varchar(50) NOT NULL,
  `postingDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`payentId`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paymententry001mb`
--

/*!40000 ALTER TABLE `paymententry001mb` DISABLE KEYS */;
INSERT INTO `paymententry001mb` (`payentId`,`entrySeries`,`paymentType`,`paymentMode`,`partyType`,`partyName`,`accpaidTo`,`postingDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (19,'56','Pay','Check','Supplier','HomeBase','13215','2022-02-07 18:30:00','latha','2022-02-09 23:56:24','latha','2022-02-09 23:56:43'),
 (20,'43','Pay','Wire Transfer','Customer','KSMerchandise','654','2022-10-11 00:00:00','siva','2022-10-28 13:34:14',NULL,NULL);
/*!40000 ALTER TABLE `paymententry001mb` ENABLE KEYS */;


--
-- Definition of table `paymentmode001hb`
--

DROP TABLE IF EXISTS `paymentmode001hb`;
CREATE TABLE `paymentmode001hb` (
  `payId` int(11) NOT NULL AUTO_INCREMENT,
  `modeName` varchar(60) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`payId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paymentmode001hb`
--

/*!40000 ALTER TABLE `paymentmode001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymentmode001hb` ENABLE KEYS */;


--
-- Definition of table `paymentmode001mb`
--

DROP TABLE IF EXISTS `paymentmode001mb`;
CREATE TABLE `paymentmode001mb` (
  `payId` int(11) NOT NULL AUTO_INCREMENT,
  `modeName` varchar(60) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`payId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paymentmode001mb`
--

/*!40000 ALTER TABLE `paymentmode001mb` DISABLE KEYS */;
INSERT INTO `paymentmode001mb` (`payId`,`modeName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'Check','','0000-00-00 00:00:00',NULL,NULL),
 (2,'Cash','','0000-00-00 00:00:00',NULL,NULL),
 (3,'Credit Card','','0000-00-00 00:00:00',NULL,NULL),
 (4,'Wire Transfer','','0000-00-00 00:00:00',NULL,NULL),
 (5,'Bank Draft','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `paymentmode001mb` ENABLE KEYS */;


--
-- Definition of table `paymentrequest001hb`
--

DROP TABLE IF EXISTS `paymentrequest001hb`;
CREATE TABLE `paymentrequest001hb` (
  `payreqId` int(11) NOT NULL AUTO_INCREMENT,
  `prName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`payreqId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paymentrequest001hb`
--

/*!40000 ALTER TABLE `paymentrequest001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymentrequest001hb` ENABLE KEYS */;


--
-- Definition of table `paymentrequest001mb`
--

DROP TABLE IF EXISTS `paymentrequest001mb`;
CREATE TABLE `paymentrequest001mb` (
  `payreqId` int(11) NOT NULL AUTO_INCREMENT,
  `prName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`payreqId`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paymentrequest001mb`
--

/*!40000 ALTER TABLE `paymentrequest001mb` DISABLE KEYS */;
INSERT INTO `paymentrequest001mb` (`payreqId`,`prName`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (35,'SANDY','Failed','latha','2022-02-09 23:55:17','latha','2022-02-09 23:55:32');
/*!40000 ALTER TABLE `paymentrequest001mb` ENABLE KEYS */;


--
-- Definition of table `payroll001hb`
--

DROP TABLE IF EXISTS `payroll001hb`;
CREATE TABLE `payroll001hb` (
  `prId` int(11) NOT NULL AUTO_INCREMENT,
  `sNo` int(11) DEFAULT NULL,
  `status` varchar(30) NOT NULL,
  `salarySlip` varchar(50) NOT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payroll001hb`
--

/*!40000 ALTER TABLE `payroll001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `payroll001hb` ENABLE KEYS */;


--
-- Definition of table `payroll001mb`
--

DROP TABLE IF EXISTS `payroll001mb`;
CREATE TABLE `payroll001mb` (
  `prId` int(11) NOT NULL AUTO_INCREMENT,
  `sNo` int(11) DEFAULT NULL,
  `status` varchar(30) NOT NULL,
  `salarySlip` varchar(50) NOT NULL,
  `empName` varchar(255) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payroll001mb`
--

/*!40000 ALTER TABLE `payroll001mb` DISABLE KEYS */;
INSERT INTO `payroll001mb` (`prId`,`sNo`,`status`,`salarySlip`,`empName`,`fiscalYear`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (5,NULL,'Submitted','45454','Dummy1',2021,'sheik','2022-02-11 07:27:14','sheik','2022-02-11 07:27:27');
/*!40000 ALTER TABLE `payroll001mb` ENABLE KEYS */;


--
-- Definition of table `periodclosingvoucher001hb`
--

DROP TABLE IF EXISTS `periodclosingvoucher001hb`;
CREATE TABLE `periodclosingvoucher001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `closingaccounthead` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  `remarks` varchar(45) NOT NULL,
  `transactiondate` datetime NOT NULL,
  `postingdate` datetime NOT NULL,
  `closingfiscalyear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `periodclosingvoucher001hb`
--

/*!40000 ALTER TABLE `periodclosingvoucher001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `periodclosingvoucher001hb` ENABLE KEYS */;


--
-- Definition of table `periodclosingvoucher001mb`
--

DROP TABLE IF EXISTS `periodclosingvoucher001mb`;
CREATE TABLE `periodclosingvoucher001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `closingaccounthead` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  `remarks` varchar(45) NOT NULL,
  `transactiondate` datetime NOT NULL,
  `postingdate` datetime NOT NULL,
  `closingfiscalyear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `periodclosingvoucher001mb`
--

/*!40000 ALTER TABLE `periodclosingvoucher001mb` DISABLE KEYS */;
INSERT INTO `periodclosingvoucher001mb` (`id`,`closingaccounthead`,`company`,`remarks`,`transactiondate`,`postingdate`,`closingfiscalyear`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,'SHEIK','NANDALALA','10','2022-03-01 18:30:00','2022-05-10 18:30:00',2023,'sheik','2022-02-11 05:07:23','sheik','2022-02-11 05:07:40');
/*!40000 ALTER TABLE `periodclosingvoucher001mb` ENABLE KEYS */;


--
-- Definition of table `posprofile001hb`
--

DROP TABLE IF EXISTS `posprofile001hb`;
CREATE TABLE `posprofile001hb` (
  `profileId` int(11) NOT NULL AUTO_INCREMENT,
  `appforUser` varchar(60) NOT NULL,
  `series` varchar(50) NOT NULL,
  `company` varchar(60) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`profileId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posprofile001hb`
--

/*!40000 ALTER TABLE `posprofile001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `posprofile001hb` ENABLE KEYS */;


--
-- Definition of table `posprofile001mb`
--

DROP TABLE IF EXISTS `posprofile001mb`;
CREATE TABLE `posprofile001mb` (
  `profileId` int(11) NOT NULL AUTO_INCREMENT,
  `appforUser` varchar(60) NOT NULL,
  `series` varchar(50) NOT NULL,
  `company` varchar(60) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`profileId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posprofile001mb`
--

/*!40000 ALTER TABLE `posprofile001mb` DISABLE KEYS */;
INSERT INTO `posprofile001mb` (`profileId`,`appforUser`,`series`,`company`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'Main User','SINV-001','Dell','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `posprofile001mb` ENABLE KEYS */;


--
-- Definition of table `pricingrule001hb`
--

DROP TABLE IF EXISTS `pricingrule001hb`;
CREATE TABLE `pricingrule001hb` (
  `priceruleid` int(11) NOT NULL AUTO_INCREMENT,
  `priceTitle` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `minQty` varchar(20) NOT NULL,
  `maxQty` varchar(30) NOT NULL,
  `company` varchar(50) NOT NULL,
  `prordisc` varchar(50) NOT NULL,
  `discprlist` varchar(50) DEFAULT NULL,
  `forprlist` varchar(50) DEFAULT NULL,
  `selling` char(1) NOT NULL,
  `buying` char(1) NOT NULL,
  `validFrom` datetime NOT NULL,
  `validUpto` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`priceruleid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pricingrule001hb`
--

/*!40000 ALTER TABLE `pricingrule001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `pricingrule001hb` ENABLE KEYS */;


--
-- Definition of table `pricingrule001mb`
--

DROP TABLE IF EXISTS `pricingrule001mb`;
CREATE TABLE `pricingrule001mb` (
  `priceruleid` int(11) NOT NULL AUTO_INCREMENT,
  `priceTitle` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `minQty` varchar(20) NOT NULL,
  `maxQty` varchar(30) NOT NULL,
  `company` varchar(50) NOT NULL,
  `prordisc` varchar(50) NOT NULL,
  `discprlist` varchar(50) DEFAULT NULL,
  `forprlist` varchar(50) DEFAULT NULL,
  `selling` char(1) NOT NULL,
  `buying` char(1) NOT NULL,
  `validFrom` datetime NOT NULL,
  `validUpto` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`priceruleid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pricingrule001mb`
--

/*!40000 ALTER TABLE `pricingrule001mb` DISABLE KEYS */;
INSERT INTO `pricingrule001mb` (`priceruleid`,`priceTitle`,`itemCode`,`minQty`,`maxQty`,`company`,`prordisc`,`discprlist`,`forprlist`,`selling`,`buying`,`validFrom`,`validUpto`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (12,'ADD','222','4454','3441','NANDALALA','3335','54543','554355','1','1','2022-02-13 18:30:00','2022-02-21 18:30:00','sheik','2022-02-11 10:47:56','sheik','2022-02-11 10:48:07');
/*!40000 ALTER TABLE `pricingrule001mb` ENABLE KEYS */;


--
-- Definition of table `prmatreq001hb`
--

DROP TABLE IF EXISTS `prmatreq001hb`;
CREATE TABLE `prmatreq001hb` (
  `pmrId` int(11) NOT NULL AUTO_INCREMENT,
  `mrType` varchar(30) NOT NULL,
  `mrSeries` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `quantity` varchar(20) NOT NULL,
  `forWarehouse` varchar(40) NOT NULL,
  `requiredDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`pmrId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prmatreq001hb`
--

/*!40000 ALTER TABLE `prmatreq001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `prmatreq001hb` ENABLE KEYS */;


--
-- Definition of table `prmatreq001mb`
--

DROP TABLE IF EXISTS `prmatreq001mb`;
CREATE TABLE `prmatreq001mb` (
  `pmrId` int(11) NOT NULL AUTO_INCREMENT,
  `mrType` varchar(30) NOT NULL,
  `mrSeries` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `quantity` varchar(20) NOT NULL,
  `forWarehouse` varchar(40) NOT NULL,
  `requiredDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`pmrId`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prmatreq001mb`
--

/*!40000 ALTER TABLE `prmatreq001mb` DISABLE KEYS */;
INSERT INTO `prmatreq001mb` (`pmrId`,`mrType`,`mrSeries`,`itemCode`,`quantity`,`forWarehouse`,`requiredDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (36,'Material Transfer','53','null','53','535','2022-10-06 00:00:00','siva','2022-10-20 15:54:14',NULL,NULL),
 (37,'Material Transfer','538','123','42','535','2022-11-21 00:00:00','siva','2022-11-25 11:04:26','siva','2022-11-25 11:04:42');
/*!40000 ALTER TABLE `prmatreq001mb` ENABLE KEYS */;


--
-- Definition of table `processpr001hb`
--

DROP TABLE IF EXISTS `processpr001hb`;
CREATE TABLE `processpr001hb` (
  `processId` int(11) NOT NULL AUTO_INCREMENT,
  `sNo` int(11) DEFAULT NULL,
  `month` int(11) NOT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  `year` year(4) NOT NULL,
  `postingDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`processId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `processpr001hb`
--

/*!40000 ALTER TABLE `processpr001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `processpr001hb` ENABLE KEYS */;


--
-- Definition of table `processpr001mb`
--

DROP TABLE IF EXISTS `processpr001mb`;
CREATE TABLE `processpr001mb` (
  `processId` int(11) NOT NULL AUTO_INCREMENT,
  `sNo` int(11) DEFAULT NULL,
  `month` int(11) NOT NULL,
  `deptName` varchar(255) DEFAULT NULL,
  `empCompany` varchar(255) DEFAULT NULL,
  `year` year(4) NOT NULL,
  `postingDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`processId`),
  KEY `sNo` (`sNo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `processpr001mb`
--

/*!40000 ALTER TABLE `processpr001mb` DISABLE KEYS */;
INSERT INTO `processpr001mb` (`processId`,`sNo`,`month`,`deptName`,`empCompany`,`year`,`postingDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,NULL,3,'Dummy1','Dummy1',2023,'2022-02-13 18:30:00','sheik','2022-02-11 07:27:44','sheik','2022-02-11 07:27:56');
/*!40000 ALTER TABLE `processpr001mb` ENABLE KEYS */;


--
-- Definition of table `prodbundle001hb`
--

DROP TABLE IF EXISTS `prodbundle001hb`;
CREATE TABLE `prodbundle001hb` (
  `pbundId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `childItem` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `description` varchar(150) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`pbundId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodbundle001hb`
--

/*!40000 ALTER TABLE `prodbundle001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `prodbundle001hb` ENABLE KEYS */;


--
-- Definition of table `prodbundle001mb`
--

DROP TABLE IF EXISTS `prodbundle001mb`;
CREATE TABLE `prodbundle001mb` (
  `pbundId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `childItem` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `description` varchar(150) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`pbundId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodbundle001mb`
--

/*!40000 ALTER TABLE `prodbundle001mb` DISABLE KEYS */;
INSERT INTO `prodbundle001mb` (`pbundId`,`itemCode`,`childItem`,`quantity`,`description`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (7,'222','DASD','8','KJDJTJTJTJT','sheik','2022-02-11 10:47:13','sheik','2022-02-11 10:47:26');
/*!40000 ALTER TABLE `prodbundle001mb` ENABLE KEYS */;


--
-- Definition of table `prodorder001hb`
--

DROP TABLE IF EXISTS `prodorder001hb`;
CREATE TABLE `prodorder001hb` (
  `prId` int(11) NOT NULL AUTO_INCREMENT,
  `itemtoManufacture` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `prorderCode` varchar(30) NOT NULL,
  `insert_user` varchar(15) DEFAULT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prId`)
) ENGINE=InnoDB AUTO_INCREMENT=869 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodorder001hb`
--

/*!40000 ALTER TABLE `prodorder001hb` DISABLE KEYS */;
INSERT INTO `prodorder001hb` (`prId`,`itemtoManufacture`,`status`,`prorderCode`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (867,'df','Draft','rt','siva','2023-01-02 15:46:51',NULL,NULL),
 (868,'rt','Draft','rt','siva','2023-01-02 15:48:10',NULL,NULL);
/*!40000 ALTER TABLE `prodorder001hb` ENABLE KEYS */;


--
-- Definition of table `prodorder001mb`
--

DROP TABLE IF EXISTS `prodorder001mb`;
CREATE TABLE `prodorder001mb` (
  `prId` int(11) NOT NULL AUTO_INCREMENT,
  `itemtoManufacture` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `prorderCode` varchar(30) NOT NULL,
  `insert_user` varchar(15) DEFAULT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prId`)
) ENGINE=InnoDB AUTO_INCREMENT=867 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodorder001mb`
--

/*!40000 ALTER TABLE `prodorder001mb` DISABLE KEYS */;
INSERT INTO `prodorder001mb` (`prId`,`itemtoManufacture`,`status`,`prorderCode`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (862,'wre','Submitted','645','siva','2022-10-27 12:19:21',NULL,NULL),
 (863,'534','Stopped','664','siva','2022-10-27 13:47:56',NULL,NULL),
 (864,'424','In-Process','645','siva','2022-10-27 13:48:10',NULL,NULL),
 (865,'gf','Draft','645','siva','2022-11-09 13:53:13',NULL,NULL),
 (866,'gf','Draft','664','siva','2022-11-09 13:53:31',NULL,NULL);
/*!40000 ALTER TABLE `prodorder001mb` ENABLE KEYS */;


--
-- Definition of table `prodplan001hb`
--

DROP TABLE IF EXISTS `prodplan001hb`;
CREATE TABLE `prodplan001hb` (
  `prplanId` int(11) NOT NULL AUTO_INCREMENT,
  `getItems` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `bomNo` varchar(30) NOT NULL,
  `plannedQty` varchar(40) NOT NULL,
  `pendingQty` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prplanId`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodplan001hb`
--

/*!40000 ALTER TABLE `prodplan001hb` DISABLE KEYS */;
INSERT INTO `prodplan001hb` (`prplanId`,`getItems`,`itemCode`,`bomNo`,`plannedQty`,`pendingQty`,`description`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (50,'Sales Order','null','656456','4345','43','hari6666','siva','2022-10-27 17:03:16','siva','2022-10-27 17:35:52');
/*!40000 ALTER TABLE `prodplan001hb` ENABLE KEYS */;


--
-- Definition of table `prodplan001mb`
--

DROP TABLE IF EXISTS `prodplan001mb`;
CREATE TABLE `prodplan001mb` (
  `prplanId` int(11) NOT NULL AUTO_INCREMENT,
  `getItems` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `bomNo` varchar(30) NOT NULL,
  `plannedQty` varchar(40) NOT NULL,
  `pendingQty` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prplanId`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodplan001mb`
--

/*!40000 ALTER TABLE `prodplan001mb` DISABLE KEYS */;
INSERT INTO `prodplan001mb` (`prplanId`,`getItems`,`itemCode`,`bomNo`,`plannedQty`,`pendingQty`,`description`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (44,'Material Delivery','qqqqqqqq','25','53','31','sheik  ','latha','2022-02-09 23:18:45','siva','2022-10-27 14:40:52'),
 (47,'Material Request','null','656','434','4343','hariew','siva','2022-10-27 17:03:14','siva','2022-10-27 17:35:21'),
 (48,'Material Request','null','656','434','43','hello','siva','2022-10-27 17:03:16','siva','2022-10-27 17:32:18'),
 (49,'Material Request','null','656','434','43','hari','siva','2022-10-27 17:03:16',NULL,NULL);
/*!40000 ALTER TABLE `prodplan001mb` ENABLE KEYS */;


--
-- Definition of table `prodstockentry001hb`
--

DROP TABLE IF EXISTS `prodstockentry001hb`;
CREATE TABLE `prodstockentry001hb` (
  `prstockId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `purpose` varchar(50) NOT NULL,
  `stockEntry` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prstockId`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodstockentry001hb`
--

/*!40000 ALTER TABLE `prodstockentry001hb` DISABLE KEYS */;
INSERT INTO `prodstockentry001hb` (`prstockId`,`title`,`status`,`purpose`,`stockEntry`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (67,'fg','Draft','fgg','fgfg','siva','2023-01-02 17:45:18',NULL,NULL);
/*!40000 ALTER TABLE `prodstockentry001hb` ENABLE KEYS */;


--
-- Definition of table `prodstockentry001mb`
--

DROP TABLE IF EXISTS `prodstockentry001mb`;
CREATE TABLE `prodstockentry001mb` (
  `prstockId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `purpose` varchar(50) NOT NULL,
  `stockEntry` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prstockId`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodstockentry001mb`
--

/*!40000 ALTER TABLE `prodstockentry001mb` DISABLE KEYS */;
INSERT INTO `prodstockentry001mb` (`prstockId`,`title`,`status`,`purpose`,`stockEntry`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (62,'fdg','Submitted','dfe','sdf','insertuser','2021-08-30 17:07:23','siva','2022-10-27 14:39:50'),
 (63,'cgb','Notstarted','sd','we','insertuser','2021-09-01 15:09:15','updateuser','2021-09-01 15:09:23'),
 (64,'thiru','Submitted','hksd','ewre','siva','2022-11-09 13:55:26',NULL,NULL),
 (65,'rerer','Draft','dfv','dfd','siva','2022-11-09 14:10:12',NULL,NULL),
 (66,'ds','Submitted','dsdsd','dsd','siva','2022-11-09 15:56:04',NULL,NULL);
/*!40000 ALTER TABLE `prodstockentry001mb` ENABLE KEYS */;


--
-- Definition of table `prodtimesheet001hb`
--

DROP TABLE IF EXISTS `prodtimesheet001hb`;
CREATE TABLE `prodtimesheet001hb` (
  `prtId` int(11) NOT NULL AUTO_INCREMENT,
  `empName` varchar(40) NOT NULL,
  `tsName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `empCompany` varchar(40) NOT NULL,
  `twhrs` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prtId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodtimesheet001hb`
--

/*!40000 ALTER TABLE `prodtimesheet001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `prodtimesheet001hb` ENABLE KEYS */;


--
-- Definition of table `prodtimesheet001mb`
--

DROP TABLE IF EXISTS `prodtimesheet001mb`;
CREATE TABLE `prodtimesheet001mb` (
  `prtId` int(11) NOT NULL AUTO_INCREMENT,
  `empName` varchar(40) NOT NULL,
  `tsName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `empCompany` varchar(40) NOT NULL,
  `twhrs` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prtId`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodtimesheet001mb`
--

/*!40000 ALTER TABLE `prodtimesheet001mb` DISABLE KEYS */;
INSERT INTO `prodtimesheet001mb` (`prtId`,`empName`,`tsName`,`status`,`empCompany`,`twhrs`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (31,'Dummy1','sdc','Submitted','Dummy3','szfec','','0000-00-00 00:00:00',NULL,NULL),
 (34,'Dummy1','sdc','Draft','Dummy1','szfec','','0000-00-00 00:00:00',NULL,NULL),
 (35,'Dummy1','wwe','Stopped','Dummy1','43','siva','2022-11-09 13:55:02',NULL,NULL),
 (36,'Dummy2','fgf','Submitted','Dummy2','7','siva','2022-11-09 14:10:40',NULL,NULL),
 (37,'Dummy1','fgf','Draft','Dummy2','7','siva','2022-11-09 15:56:50',NULL,NULL);
/*!40000 ALTER TABLE `prodtimesheet001mb` ENABLE KEYS */;


--
-- Definition of table `productbundle001hb`
--

DROP TABLE IF EXISTS `productbundle001hb`;
CREATE TABLE `productbundle001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `parentitem` varchar(255) DEFAULT NULL,
  `quantity` int(10) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productbundle001hb`
--

/*!40000 ALTER TABLE `productbundle001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `productbundle001hb` ENABLE KEYS */;


--
-- Definition of table `productbundle001mb`
--

DROP TABLE IF EXISTS `productbundle001mb`;
CREATE TABLE `productbundle001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `parentitem` varchar(255) DEFAULT NULL,
  `quantity` int(10) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productbundle001mb`
--

/*!40000 ALTER TABLE `productbundle001mb` DISABLE KEYS */;
INSERT INTO `productbundle001mb` (`id`,`description`,`item`,`parentitem`,`quantity`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'desc','bat','bat',2,'','0000-00-00 00:00:00',NULL,NULL),
 (2,'desc','ball','ball',5,'','0000-00-00 00:00:00',NULL,NULL),
 (3,'dexs','Wing Sheet','parent',5,'','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `productbundle001mb` ENABLE KEYS */;


--
-- Definition of table `progprodorder001hb`
--

DROP TABLE IF EXISTS `progprodorder001hb`;
CREATE TABLE `progprodorder001hb` (
  `prodId` int(11) NOT NULL AUTO_INCREMENT,
  `prorderCode` varchar(30) NOT NULL,
  `itemtoManufacture` varchar(40) NOT NULL,
  `toProduce` varchar(30) DEFAULT NULL,
  `produced` varchar(30) NOT NULL,
  `empCompany` varchar(30) NOT NULL,
  `date` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prodId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `progprodorder001hb`
--

/*!40000 ALTER TABLE `progprodorder001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `progprodorder001hb` ENABLE KEYS */;


--
-- Definition of table `progprodorder001mb`
--

DROP TABLE IF EXISTS `progprodorder001mb`;
CREATE TABLE `progprodorder001mb` (
  `prodId` int(11) NOT NULL AUTO_INCREMENT,
  `prorderCode` varchar(30) NOT NULL,
  `itemtoManufacture` varchar(40) NOT NULL,
  `toProduce` varchar(30) DEFAULT NULL,
  `produced` varchar(30) NOT NULL,
  `empCompany` varchar(30) NOT NULL,
  `date` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prodId`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `progprodorder001mb`
--

/*!40000 ALTER TABLE `progprodorder001mb` DISABLE KEYS */;
INSERT INTO `progprodorder001mb` (`prodId`,`prorderCode`,`itemtoManufacture`,`toProduce`,`produced`,`empCompany`,`date`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (24,'Dummy1','Dummy2','asd','ad','sf','2021-08-13 00:00:00','','0000-00-00 00:00:00',NULL,NULL),
 (25,'Dummy2','tffg','dfg','fg','gf','2021-09-16 00:00:00','insertuser','2021-09-01 15:16:22','updateuser','2021-09-01 15:16:29'),
 (26,'Dummy2','hh','SMD','SHEIK','NANDALALA','2022-02-21 18:30:00','latha','2022-02-09 23:29:49','latha','2022-02-09 23:30:01'),
 (27,'Dummy1','null','hjhr','trtet','tetete','2022-10-20 00:00:00','siva','2022-10-20 15:33:05',NULL,NULL);
/*!40000 ALTER TABLE `progprodorder001mb` ENABLE KEYS */;


--
-- Definition of table `project001hb`
--

DROP TABLE IF EXISTS `project001hb`;
CREATE TABLE `project001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectname` varchar(30) NOT NULL,
  `estimatedcost` int(11) NOT NULL,
  `status` varchar(30) NOT NULL,
  `enddate` datetime NOT NULL,
  `startdate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project001hb`
--

/*!40000 ALTER TABLE `project001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `project001hb` ENABLE KEYS */;


--
-- Definition of table `project001mb`
--

DROP TABLE IF EXISTS `project001mb`;
CREATE TABLE `project001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectname` varchar(30) NOT NULL,
  `estimatedcost` int(11) NOT NULL,
  `status` varchar(30) NOT NULL,
  `enddate` datetime NOT NULL,
  `startdate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project001mb`
--

/*!40000 ALTER TABLE `project001mb` DISABLE KEYS */;
INSERT INTO `project001mb` (`id`,`projectname`,`estimatedcost`,`status`,`enddate`,`startdate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (16,'SHEIK',457,'GODDD','2022-04-05 18:30:00','2022-02-13 18:30:00','sheik','2022-02-11 10:18:13','sheik','2022-02-11 10:18:32');
/*!40000 ALTER TABLE `project001mb` ENABLE KEYS */;


--
-- Definition of table `prpurchaseord001hb`
--

DROP TABLE IF EXISTS `prpurchaseord001hb`;
CREATE TABLE `prpurchaseord001hb` (
  `proId` int(11) NOT NULL AUTO_INCREMENT,
  `poSeries` varchar(40) NOT NULL,
  `supplier` varchar(40) NOT NULL,
  `supplyrawmat` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `rate` decimal(12,4) NOT NULL,
  `amount` decimal(12,4) NOT NULL,
  `prtype` varchar(40) NOT NULL,
  `quotrate` decimal(12,4) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `accountHead` int(11) DEFAULT NULL,
  `taxandChg` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`proId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prpurchaseord001hb`
--

/*!40000 ALTER TABLE `prpurchaseord001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `prpurchaseord001hb` ENABLE KEYS */;


--
-- Definition of table `prpurchaseord001mb`
--

DROP TABLE IF EXISTS `prpurchaseord001mb`;
CREATE TABLE `prpurchaseord001mb` (
  `proId` int(11) NOT NULL AUTO_INCREMENT,
  `poSeries` varchar(40) NOT NULL,
  `supplier` varchar(40) NOT NULL,
  `supplyrawmat` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `rate` decimal(12,4) NOT NULL,
  `amount` decimal(12,4) NOT NULL,
  `prtype` varchar(40) NOT NULL,
  `quotrate` decimal(12,4) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `accountHead` int(11) DEFAULT NULL,
  `taxandChg` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`proId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prpurchaseord001mb`
--

/*!40000 ALTER TABLE `prpurchaseord001mb` DISABLE KEYS */;
INSERT INTO `prpurchaseord001mb` (`proId`,`poSeries`,`supplier`,`supplyrawmat`,`itemCode`,`rate`,`amount`,`prtype`,`quotrate`,`date`,`quantity`,`accountHead`,`taxandChg`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'Dummy1','New World Reality','Yes','123','1000000.0000','12344.0000','44','32.0000','2022-12-08 00:00:00',13,43,212,'siva','2022-12-07 10:50:36',NULL,NULL);
/*!40000 ALTER TABLE `prpurchaseord001mb` ENABLE KEYS */;


--
-- Definition of table `prreqquot001hb`
--

DROP TABLE IF EXISTS `prreqquot001hb`;
CREATE TABLE `prreqquot001hb` (
  `prqId` int(11) NOT NULL AUTO_INCREMENT,
  `rqSeries` varchar(40) NOT NULL,
  `supplier` varchar(40) NOT NULL,
  `emailId` varchar(60) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `warehouse` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `requiredDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prqId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prreqquot001hb`
--

/*!40000 ALTER TABLE `prreqquot001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `prreqquot001hb` ENABLE KEYS */;


--
-- Definition of table `prreqquot001mb`
--

DROP TABLE IF EXISTS `prreqquot001mb`;
CREATE TABLE `prreqquot001mb` (
  `prqId` int(11) NOT NULL AUTO_INCREMENT,
  `rqSeries` varchar(40) NOT NULL,
  `supplier` varchar(40) NOT NULL,
  `emailId` varchar(60) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `warehouse` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `requiredDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prqId`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prreqquot001mb`
--

/*!40000 ALTER TABLE `prreqquot001mb` DISABLE KEYS */;
INSERT INTO `prreqquot001mb` (`prqId`,`rqSeries`,`supplier`,`emailId`,`contact`,`itemCode`,`quantity`,`warehouse`,`date`,`requiredDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (31,'45','New World Reality','HGFHJGFJHGHFK@GMAIL.COM','9025762102','55','7','26','2022-02-14 18:30:00','2022-02-14 18:30:00','sheik','2022-02-11 05:49:40','sheik','2022-02-11 05:49:58');
/*!40000 ALTER TABLE `prreqquot001mb` ENABLE KEYS */;


--
-- Definition of table `prsureq001hb`
--

DROP TABLE IF EXISTS `prsureq001hb`;
CREATE TABLE `prsureq001hb` (
  `prsrId` int(11) NOT NULL AUTO_INCREMENT,
  `suSeries` varchar(50) NOT NULL,
  `supplier` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `stockUOM` varchar(20) NOT NULL,
  `rate` decimal(12,4) NOT NULL,
  `taxandChg` decimal(12,4) DEFAULT NULL,
  `accountHead` varchar(40) NOT NULL,
  `squotrate` decimal(12,4) DEFAULT NULL,
  `sutype` varchar(40) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prsrId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prsureq001hb`
--

/*!40000 ALTER TABLE `prsureq001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `prsureq001hb` ENABLE KEYS */;


--
-- Definition of table `prsureq001mb`
--

DROP TABLE IF EXISTS `prsureq001mb`;
CREATE TABLE `prsureq001mb` (
  `prsrId` int(11) NOT NULL AUTO_INCREMENT,
  `suSeries` varchar(50) NOT NULL,
  `supplier` varchar(40) NOT NULL,
  `itemCode` varchar(40) NOT NULL,
  `stockUOM` varchar(20) NOT NULL,
  `rate` decimal(12,4) NOT NULL,
  `taxandChg` decimal(12,4) DEFAULT NULL,
  `accountHead` varchar(40) NOT NULL,
  `squotrate` decimal(12,4) DEFAULT NULL,
  `sutype` varchar(40) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`prsrId`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prsureq001mb`
--

/*!40000 ALTER TABLE `prsureq001mb` DISABLE KEYS */;
INSERT INTO `prsureq001mb` (`prsrId`,`suSeries`,`supplier`,`itemCode`,`stockUOM`,`rate`,`taxandChg`,`accountHead`,`squotrate`,`sutype`,`date`,`quantity`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (31,'Purchase','Eagle Hardware','55','45','2000.0000','787.0000','SHEIK','45643.0000','SAMD','2022-02-13 18:30:00',2,'sheik','2022-02-11 05:54:41','sheik','2022-02-11 05:54:49');
/*!40000 ALTER TABLE `prsureq001mb` ENABLE KEYS */;


--
-- Definition of table `puordtrends001hb`
--

DROP TABLE IF EXISTS `puordtrends001hb`;
CREATE TABLE `puordtrends001hb` (
  `ptrId` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(50) NOT NULL,
  `basedOn` varchar(40) NOT NULL,
  `fiscalYear` year(4) NOT NULL,
  `company` varchar(60) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `janQty` varchar(40) DEFAULT NULL,
  `janAmt` decimal(12,4) DEFAULT NULL,
  `febQty` varchar(40) DEFAULT NULL,
  `febAmt` decimal(12,4) DEFAULT NULL,
  `marQty` varchar(30) DEFAULT NULL,
  `marAmt` decimal(12,4) DEFAULT NULL,
  `aprQty` varchar(40) NOT NULL,
  `aprAmt` decimal(12,4) DEFAULT NULL,
  `mayQty` varchar(40) DEFAULT NULL,
  `mayAmt` decimal(12,4) DEFAULT NULL,
  `junQty` varchar(40) DEFAULT NULL,
  `junAmt` decimal(12,4) DEFAULT NULL,
  `julQty` varchar(40) DEFAULT NULL,
  `julAmt` decimal(12,4) DEFAULT NULL,
  `augQty` varchar(40) DEFAULT NULL,
  `augAmt` decimal(12,4) DEFAULT NULL,
  `sepQty` varchar(40) DEFAULT NULL,
  `sepAmt` decimal(12,4) DEFAULT NULL,
  `octQty` varchar(40) DEFAULT NULL,
  `octAmt` decimal(12,4) DEFAULT NULL,
  `novQty` varchar(40) DEFAULT NULL,
  `novAmt` decimal(12,4) DEFAULT NULL,
  `decQty` varchar(40) DEFAULT NULL,
  `decAmt` decimal(12,4) DEFAULT NULL,
  `totalQty` varchar(30) DEFAULT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  `augQtyt` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ptrId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `puordtrends001hb`
--

/*!40000 ALTER TABLE `puordtrends001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `puordtrends001hb` ENABLE KEYS */;


--
-- Definition of table `puordtrends001mb`
--

DROP TABLE IF EXISTS `puordtrends001mb`;
CREATE TABLE `puordtrends001mb` (
  `ptrId` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(50) NOT NULL,
  `basedOn` varchar(40) NOT NULL,
  `fiscalYear` year(4) NOT NULL,
  `company` varchar(60) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `janQty` varchar(40) DEFAULT NULL,
  `janAmt` decimal(12,4) DEFAULT NULL,
  `febQty` varchar(40) DEFAULT NULL,
  `febAmt` decimal(12,4) DEFAULT NULL,
  `marQty` varchar(30) DEFAULT NULL,
  `marAmt` decimal(12,4) DEFAULT NULL,
  `aprQty` varchar(40) NOT NULL,
  `aprAmt` decimal(12,4) DEFAULT NULL,
  `mayQty` varchar(40) DEFAULT NULL,
  `mayAmt` decimal(12,4) DEFAULT NULL,
  `junQty` varchar(40) DEFAULT NULL,
  `junAmt` decimal(12,4) DEFAULT NULL,
  `julQty` varchar(40) DEFAULT NULL,
  `julAmt` decimal(12,4) DEFAULT NULL,
  `augQty` varchar(40) DEFAULT NULL,
  `augAmt` decimal(12,4) DEFAULT NULL,
  `sepQty` varchar(40) DEFAULT NULL,
  `sepAmt` decimal(12,4) DEFAULT NULL,
  `octQty` varchar(40) DEFAULT NULL,
  `octAmt` decimal(12,4) DEFAULT NULL,
  `novQty` varchar(40) DEFAULT NULL,
  `novAmt` decimal(12,4) DEFAULT NULL,
  `decQty` varchar(40) DEFAULT NULL,
  `decAmt` decimal(12,4) DEFAULT NULL,
  `totalQty` varchar(30) DEFAULT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  `augQtyt` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ptrId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `puordtrends001mb`
--

/*!40000 ALTER TABLE `puordtrends001mb` DISABLE KEYS */;
INSERT INTO `puordtrends001mb` (`ptrId`,`period`,`basedOn`,`fiscalYear`,`company`,`itemCode`,`janQty`,`janAmt`,`febQty`,`febAmt`,`marQty`,`marAmt`,`aprQty`,`aprAmt`,`mayQty`,`mayAmt`,`junQty`,`junAmt`,`julQty`,`julAmt`,`augQty`,`augAmt`,`sepQty`,`sepAmt`,`octQty`,`octAmt`,`novQty`,`novAmt`,`decQty`,`decAmt`,`totalQty`,`totalAmt`,`augQtyt`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'Monthly','Item',2015,'Dell','Table','12','3400.0000','10','2450.0000','','0.0000','','0.0000','','0.0000','','0.0000','','0.0000','','0.0000','6','4500.0000','7','5600.0000','','0.0000','14','16000.0000','100','1000000.0000',NULL,'','0000-00-00 00:00:00',NULL,NULL),
 (2,'Weekly','Supplier Type',2011,'Dell','Wind Mill A Series','2','200.0000','1','100.0000','3','300.0000','4','400.0000','1','100.0000','1','100.0000',NULL,'600.0000',NULL,'700.0000','4','400.0000','3','300.0000','3','300.0000','2','200.0000','16','16000.0000','7','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `puordtrends001mb` ENABLE KEYS */;


--
-- Definition of table `puranalytics001hb`
--

DROP TABLE IF EXISTS `puranalytics001hb`;
CREATE TABLE `puranalytics001hb` (
  `puansId` int(11) NOT NULL AUTO_INCREMENT,
  `treeType` varchar(50) NOT NULL,
  `basedOn` varchar(50) NOT NULL,
  `valueorqty` varchar(40) NOT NULL,
  `company` varchar(50) NOT NULL,
  `anRange` varchar(50) DEFAULT NULL,
  `fromDate` datetime NOT NULL,
  `toDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`puansId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `puranalytics001hb`
--

/*!40000 ALTER TABLE `puranalytics001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `puranalytics001hb` ENABLE KEYS */;


--
-- Definition of table `puranalytics001mb`
--

DROP TABLE IF EXISTS `puranalytics001mb`;
CREATE TABLE `puranalytics001mb` (
  `puansId` int(11) NOT NULL AUTO_INCREMENT,
  `treeType` varchar(50) NOT NULL,
  `basedOn` varchar(50) NOT NULL,
  `valueorqty` varchar(40) NOT NULL,
  `company` varchar(50) NOT NULL,
  `anRange` varchar(50) DEFAULT NULL,
  `fromDate` datetime NOT NULL,
  `toDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`puansId`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `puranalytics001mb`
--

/*!40000 ALTER TABLE `puranalytics001mb` DISABLE KEYS */;
INSERT INTO `puranalytics001mb` (`puansId`,`treeType`,`basedOn`,`valueorqty`,`company`,`anRange`,`fromDate`,`toDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (21,'Supplier Type','Purchase Invoice','Quantity','NANDALALA','Quarterly','2022-02-14 18:30:00','2022-02-15 18:30:00','sheik','2022-02-11 06:10:44','sheik','2022-02-11 06:10:50');
/*!40000 ALTER TABLE `puranalytics001mb` ENABLE KEYS */;


--
-- Definition of table `purchase001hb`
--

DROP TABLE IF EXISTS `purchase001hb`;
CREATE TABLE `purchase001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Date` datetime DEFAULT NULL,
  `grandtotal` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `supplier` varchar(255) DEFAULT NULL,
  `supplieraddress` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase001hb`
--

/*!40000 ALTER TABLE `purchase001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase001hb` ENABLE KEYS */;


--
-- Definition of table `purchase001mb`
--

DROP TABLE IF EXISTS `purchase001mb`;
CREATE TABLE `purchase001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Date` datetime DEFAULT NULL,
  `grandtotal` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `supplier` varchar(255) DEFAULT NULL,
  `supplieraddress` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase001mb`
--

/*!40000 ALTER TABLE `purchase001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase001mb` ENABLE KEYS */;


--
-- Definition of table `purchasereceipt001hb`
--

DROP TABLE IF EXISTS `purchasereceipt001hb`;
CREATE TABLE `purchasereceipt001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `supplier` varchar(30) NOT NULL,
  `Date` datetime NOT NULL,
  `supplieraddress` varchar(30) NOT NULL,
  `grandtotal` int(10) NOT NULL,
  `status` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchasereceipt001hb`
--

/*!40000 ALTER TABLE `purchasereceipt001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchasereceipt001hb` ENABLE KEYS */;


--
-- Definition of table `purchasereceipt001mb`
--

DROP TABLE IF EXISTS `purchasereceipt001mb`;
CREATE TABLE `purchasereceipt001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `supplier` varchar(30) NOT NULL,
  `Date` datetime NOT NULL,
  `supplieraddress` varchar(30) NOT NULL,
  `grandtotal` int(10) NOT NULL,
  `status` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchasereceipt001mb`
--

/*!40000 ALTER TABLE `purchasereceipt001mb` DISABLE KEYS */;
INSERT INTO `purchasereceipt001mb` (`id`,`supplier`,`Date`,`supplieraddress`,`grandtotal`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'solutions','0000-00-00 00:00:00','solutions',100,'tobill','','0000-00-00 00:00:00',NULL,NULL),
 (2,'solutions','0000-00-00 00:00:00','solutions',100,'tobill','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `purchasereceipt001mb` ENABLE KEYS */;


--
-- Definition of table `purchaseregister001hb`
--

DROP TABLE IF EXISTS `purchaseregister001hb`;
CREATE TABLE `purchaseregister001hb` (
  `regId` int(11) NOT NULL AUTO_INCREMENT,
  `invoice` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `supType` varchar(50) NOT NULL,
  `accountType` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `projectname` varchar(50) NOT NULL,
  `billNo` varchar(30) NOT NULL,
  `remarks` varchar(150) NOT NULL,
  `poSeries` varchar(50) NOT NULL,
  `purecpt` varchar(50) NOT NULL,
  `currency` varchar(30) NOT NULL,
  `furnituresCount` decimal(12,4) DEFAULT NULL,
  `softwaresCount` decimal(12,4) DEFAULT NULL,
  `stkrecBalance` decimal(12,4) DEFAULT NULL,
  `netTotal` decimal(12,4) DEFAULT NULL,
  `totalTax` decimal(12,4) DEFAULT NULL,
  `grandTotal` decimal(12,4) DEFAULT NULL,
  `roundTotal` decimal(12,4) DEFAULT NULL,
  `oustandAmt` decimal(12,4) DEFAULT NULL,
  `postingDate` datetime NOT NULL,
  `billDate` datetime NOT NULL,
  `outstandAmt` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`regId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchaseregister001hb`
--

/*!40000 ALTER TABLE `purchaseregister001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchaseregister001hb` ENABLE KEYS */;


--
-- Definition of table `purchaseregister001mb`
--

DROP TABLE IF EXISTS `purchaseregister001mb`;
CREATE TABLE `purchaseregister001mb` (
  `regId` int(11) NOT NULL AUTO_INCREMENT,
  `invoice` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `supType` varchar(50) NOT NULL,
  `accountType` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `projectname` varchar(50) NOT NULL,
  `billNo` varchar(30) NOT NULL,
  `remarks` varchar(150) NOT NULL,
  `poSeries` varchar(50) NOT NULL,
  `purecpt` varchar(50) NOT NULL,
  `currency` varchar(30) NOT NULL,
  `furnituresCount` decimal(12,4) DEFAULT NULL,
  `softwaresCount` decimal(12,4) DEFAULT NULL,
  `stkrecBalance` decimal(12,4) DEFAULT NULL,
  `netTotal` decimal(12,4) DEFAULT NULL,
  `totalTax` decimal(12,4) DEFAULT NULL,
  `grandTotal` decimal(12,4) DEFAULT NULL,
  `roundTotal` decimal(12,4) DEFAULT NULL,
  `oustandAmt` decimal(12,4) DEFAULT NULL,
  `postingDate` datetime NOT NULL,
  `billDate` datetime NOT NULL,
  `outstandAmt` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`regId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchaseregister001mb`
--

/*!40000 ALTER TABLE `purchaseregister001mb` DISABLE KEYS */;
INSERT INTO `purchaseregister001mb` (`regId`,`invoice`,`supName`,`supType`,`accountType`,`paymentMode`,`projectname`,`billNo`,`remarks`,`poSeries`,`purecpt`,`currency`,`furnituresCount`,`softwaresCount`,`stkrecBalance`,`netTotal`,`totalTax`,`grandTotal`,`roundTotal`,`oustandAmt`,`postingDate`,`billDate`,`outstandAmt`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (11,'5456','Asiatic Solution','Hardware','National Bank','Cash','Dummy2','2323','GOOD AND BAD','Dummy2','8754321','USD','7894.0000','13473.0000','7654.0000','7465.0000','1351.0000','786435.0000','787564.0000',NULL,'2022-02-11 18:30:00','2022-02-19 18:30:00',1324684,'sheik','2022-02-11 04:30:45','sheik','2022-02-11 04:31:01');
/*!40000 ALTER TABLE `purchaseregister001mb` ENABLE KEYS */;


--
-- Definition of table `purecpttrend001hb`
--

DROP TABLE IF EXISTS `purecpttrend001hb`;
CREATE TABLE `purecpttrend001hb` (
  `putrendId` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(50) NOT NULL,
  `basedOn` varchar(40) NOT NULL,
  `company` varchar(60) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `janQty` varchar(40) DEFAULT NULL,
  `janAmt` decimal(12,4) DEFAULT NULL,
  `febQty` varchar(40) DEFAULT NULL,
  `febAmt` decimal(12,4) DEFAULT NULL,
  `marQty` varchar(30) DEFAULT NULL,
  `marAmt` decimal(12,4) DEFAULT NULL,
  `aprQty` varchar(40) NOT NULL,
  `aprAmt` decimal(12,4) DEFAULT NULL,
  `mayQty` varchar(40) DEFAULT NULL,
  `mayAmt` decimal(12,4) DEFAULT NULL,
  `junQty` varchar(40) DEFAULT NULL,
  `junAmt` decimal(12,4) DEFAULT NULL,
  `julQty` varchar(40) DEFAULT NULL,
  `julAmt` decimal(12,4) DEFAULT NULL,
  `augQty` varchar(40) DEFAULT NULL,
  `augAmt` decimal(12,4) DEFAULT NULL,
  `sepQty` varchar(40) DEFAULT NULL,
  `sepAmt` decimal(12,4) DEFAULT NULL,
  `octQty` varchar(40) DEFAULT NULL,
  `octAmt` decimal(12,4) DEFAULT NULL,
  `novQty` varchar(40) DEFAULT NULL,
  `novAmt` decimal(12,4) DEFAULT NULL,
  `decQty` varchar(40) DEFAULT NULL,
  `decAmt` decimal(12,4) DEFAULT NULL,
  `totalQty` varchar(30) DEFAULT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  `augQtyt` varchar(255) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`putrendId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purecpttrend001hb`
--

/*!40000 ALTER TABLE `purecpttrend001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `purecpttrend001hb` ENABLE KEYS */;


--
-- Definition of table `purecpttrend001mb`
--

DROP TABLE IF EXISTS `purecpttrend001mb`;
CREATE TABLE `purecpttrend001mb` (
  `putrendId` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(50) NOT NULL,
  `basedOn` varchar(40) NOT NULL,
  `company` varchar(60) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `janQty` varchar(40) DEFAULT NULL,
  `janAmt` decimal(12,4) DEFAULT NULL,
  `febQty` varchar(40) DEFAULT NULL,
  `febAmt` decimal(12,4) DEFAULT NULL,
  `marQty` varchar(30) DEFAULT NULL,
  `marAmt` decimal(12,4) DEFAULT NULL,
  `aprQty` varchar(40) NOT NULL,
  `aprAmt` decimal(12,4) DEFAULT NULL,
  `mayQty` varchar(40) DEFAULT NULL,
  `mayAmt` decimal(12,4) DEFAULT NULL,
  `junQty` varchar(40) DEFAULT NULL,
  `junAmt` decimal(12,4) DEFAULT NULL,
  `julQty` varchar(40) DEFAULT NULL,
  `julAmt` decimal(12,4) DEFAULT NULL,
  `augQty` varchar(40) DEFAULT NULL,
  `augAmt` decimal(12,4) DEFAULT NULL,
  `sepQty` varchar(40) DEFAULT NULL,
  `sepAmt` decimal(12,4) DEFAULT NULL,
  `octQty` varchar(40) DEFAULT NULL,
  `octAmt` decimal(12,4) DEFAULT NULL,
  `novQty` varchar(40) DEFAULT NULL,
  `novAmt` decimal(12,4) DEFAULT NULL,
  `decQty` varchar(40) DEFAULT NULL,
  `decAmt` decimal(12,4) DEFAULT NULL,
  `totalQty` varchar(30) DEFAULT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  `augQtyt` varchar(255) DEFAULT NULL,
  `fiscalYear` year(4) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`putrendId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purecpttrend001mb`
--

/*!40000 ALTER TABLE `purecpttrend001mb` DISABLE KEYS */;
INSERT INTO `purecpttrend001mb` (`putrendId`,`period`,`basedOn`,`company`,`itemCode`,`janQty`,`janAmt`,`febQty`,`febAmt`,`marQty`,`marAmt`,`aprQty`,`aprAmt`,`mayQty`,`mayAmt`,`junQty`,`junAmt`,`julQty`,`julAmt`,`augQty`,`augAmt`,`sepQty`,`sepAmt`,`octQty`,`octAmt`,`novQty`,`novAmt`,`decQty`,`decAmt`,`totalQty`,`totalAmt`,`augQtyt`,`fiscalYear`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (2,'Weekly','Supplier Type','Dell','Wind Mill A Series','2','200.0000','1','100.0000','3','300.0000','4','400.0000','1','100.0000','1','100.0000',NULL,'600.0000',NULL,'700.0000','4','400.0000','3','300.0000','3','300.0000','2','200.0000','16','16000.0000',NULL,0000,'','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `purecpttrend001mb` ENABLE KEYS */;


--
-- Definition of table `purorditemreceive001hb`
--

DROP TABLE IF EXISTS `purorditemreceive001hb`;
CREATE TABLE `purorditemreceive001hb` (
  `poitrecId` int(11) NOT NULL AUTO_INCREMENT,
  `puOrder` varchar(50) NOT NULL,
  `reqbyDate` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `projectName` varchar(50) DEFAULT NULL,
  `receivedQty` decimal(12,4) DEFAULT NULL,
  `qtytoReceive` decimal(12,4) DEFAULT NULL,
  `warehouseName` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `brandName` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`poitrecId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purorditemreceive001hb`
--

/*!40000 ALTER TABLE `purorditemreceive001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `purorditemreceive001hb` ENABLE KEYS */;


--
-- Definition of table `purorditemreceive001mb`
--

DROP TABLE IF EXISTS `purorditemreceive001mb`;
CREATE TABLE `purorditemreceive001mb` (
  `poitrecId` int(11) NOT NULL AUTO_INCREMENT,
  `puOrder` varchar(50) NOT NULL,
  `reqbyDate` varchar(50) NOT NULL,
  `supName` varchar(50) NOT NULL,
  `projectName` varchar(50) DEFAULT NULL,
  `receivedQty` decimal(12,4) DEFAULT NULL,
  `qtytoReceive` decimal(12,4) DEFAULT NULL,
  `warehouseName` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `brandName` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`poitrecId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purorditemreceive001mb`
--

/*!40000 ALTER TABLE `purorditemreceive001mb` DISABLE KEYS */;
INSERT INTO `purorditemreceive001mb` (`poitrecId`,`puOrder`,`reqbyDate`,`supName`,`projectName`,`receivedQty`,`qtytoReceive`,`warehouseName`,`itemCode`,`description`,`brandName`,`company`,`date`,`quantity`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (2,'45387','4651','KSMerchandise','SHEIK','768.0000','12341.0000','SAD','222','FDFDFFSFGREG','BMW','NANDALALA','2022-02-13 18:30:00',7,'sheik','2022-02-11 11:55:21','sheik','2022-02-11 11:55:30');
/*!40000 ALTER TABLE `purorditemreceive001mb` ENABLE KEYS */;


--
-- Definition of table `purtaxcharges001hb`
--

DROP TABLE IF EXISTS `purtaxcharges001hb`;
CREATE TABLE `purtaxcharges001hb` (
  `putaxId` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `taxchgType` varchar(50) NOT NULL,
  `accountHead` varchar(50) NOT NULL,
  `rate` decimal(12,4) DEFAULT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `total` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`putaxId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purtaxcharges001hb`
--

/*!40000 ALTER TABLE `purtaxcharges001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `purtaxcharges001hb` ENABLE KEYS */;


--
-- Definition of table `purtaxcharges001mb`
--

DROP TABLE IF EXISTS `purtaxcharges001mb`;
CREATE TABLE `purtaxcharges001mb` (
  `putaxId` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `taxchgType` varchar(50) NOT NULL,
  `accountHead` varchar(50) NOT NULL,
  `rate` decimal(12,4) DEFAULT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `total` decimal(12,4) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`putaxId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purtaxcharges001mb`
--

/*!40000 ALTER TABLE `purtaxcharges001mb` DISABLE KEYS */;
INSERT INTO `purtaxcharges001mb` (`putaxId`,`status`,`company`,`taxchgType`,`accountHead`,`rate`,`amount`,`total`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (16,'Disabled','NANDALALA','SOFTWARE','SHEIK','2000.0000','3000.0000','200000.0000','sheik','2022-02-11 04:25:40','sheik','2022-02-11 04:25:56');
/*!40000 ALTER TABLE `purtaxcharges001mb` ENABLE KEYS */;


--
-- Definition of table `recruitapplicant001hb`
--

DROP TABLE IF EXISTS `recruitapplicant001hb`;
CREATE TABLE `recruitapplicant001hb` (
  `appId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantName` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `jobId` int(11) DEFAULT NULL,
  `jobName` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`appId`),
  KEY `jobId` (`jobId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitapplicant001hb`
--

/*!40000 ALTER TABLE `recruitapplicant001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruitapplicant001hb` ENABLE KEYS */;


--
-- Definition of table `recruitapplicant001mb`
--

DROP TABLE IF EXISTS `recruitapplicant001mb`;
CREATE TABLE `recruitapplicant001mb` (
  `appId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantName` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `jobId` int(11) DEFAULT NULL,
  `jobName` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`appId`),
  KEY `jobId` (`jobId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitapplicant001mb`
--

/*!40000 ALTER TABLE `recruitapplicant001mb` DISABLE KEYS */;
INSERT INTO `recruitapplicant001mb` (`appId`,`applicantName`,`status`,`jobId`,`jobName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (7,'SHEIK','closed',NULL,'INFORMATION TECNOLOGY','sheik','2022-02-11 07:15:56','sheik','2022-02-11 07:16:07');
/*!40000 ALTER TABLE `recruitapplicant001mb` ENABLE KEYS */;


--
-- Definition of table `recruitoffer001hb`
--

DROP TABLE IF EXISTS `recruitoffer001hb`;
CREATE TABLE `recruitoffer001hb` (
  `offerId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantNamePrefix` varchar(30) NOT NULL,
  `applicantName` varchar(30) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `offer` varchar(30) NOT NULL,
  `refer` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `grade` varchar(30) NOT NULL,
  `ctc` varchar(30) NOT NULL,
  `line1` varchar(45) NOT NULL,
  `line2` varchar(45) NOT NULL,
  `cityOrVillage` varchar(30) NOT NULL,
  `stateOrTerritory` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `offerLetter` varchar(30) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `dateOfJoin` datetime NOT NULL,
  `postalCode` int(11) NOT NULL,
  `phoneNo` varchar(15) DEFAULT NULL,
  `alternativePhoneNo` varchar(15) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`offerId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitoffer001hb`
--

/*!40000 ALTER TABLE `recruitoffer001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruitoffer001hb` ENABLE KEYS */;


--
-- Definition of table `recruitoffer001mb`
--

DROP TABLE IF EXISTS `recruitoffer001mb`;
CREATE TABLE `recruitoffer001mb` (
  `offerId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantNamePrefix` varchar(30) NOT NULL,
  `applicantName` varchar(30) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `offer` varchar(30) NOT NULL,
  `refer` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `grade` varchar(30) NOT NULL,
  `ctc` varchar(30) NOT NULL,
  `line1` varchar(45) NOT NULL,
  `line2` varchar(45) NOT NULL,
  `cityOrVillage` varchar(30) NOT NULL,
  `stateOrTerritory` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `offerLetter` varchar(30) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `dateOfJoin` datetime NOT NULL,
  `postalCode` int(11) NOT NULL,
  `phoneNo` varchar(15) DEFAULT NULL,
  `alternativePhoneNo` varchar(15) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`offerId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitoffer001mb`
--

/*!40000 ALTER TABLE `recruitoffer001mb` DISABLE KEYS */;
INSERT INTO `recruitoffer001mb` (`offerId`,`applicantNamePrefix`,`applicantName`,`companyName`,`offer`,`refer`,`position`,`grade`,`ctc`,`line1`,`line2`,`cityOrVillage`,`stateOrTerritory`,`country`,`offerLetter`,`status`,`dateOfJoin`,`postalCode`,`phoneNo`,`alternativePhoneNo`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (10,'Mr','SHEIK','NANDALALA','GRANTED','SHEIK','IT','BSC','DS','GVDASHUFDJHA','UYFGJHFBAAD','THALAKUDI','TAMILNADU','INDIA','IT TECH',NULL,'2022-02-14 18:30:00',621216,'9025762102','9443534057','sheik','2022-02-11 07:17:42','sheik','2022-02-11 07:17:55');
/*!40000 ALTER TABLE `recruitoffer001mb` ENABLE KEYS */;


--
-- Definition of table `recruitopening001hb`
--

DROP TABLE IF EXISTS `recruitopening001hb`;
CREATE TABLE `recruitopening001hb` (
  `jobId` int(11) NOT NULL AUTO_INCREMENT,
  `jobName` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`jobId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitopening001hb`
--

/*!40000 ALTER TABLE `recruitopening001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruitopening001hb` ENABLE KEYS */;


--
-- Definition of table `recruitopening001mb`
--

DROP TABLE IF EXISTS `recruitopening001mb`;
CREATE TABLE `recruitopening001mb` (
  `jobId` int(11) NOT NULL AUTO_INCREMENT,
  `jobName` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`jobId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitopening001mb`
--

/*!40000 ALTER TABLE `recruitopening001mb` DISABLE KEYS */;
INSERT INTO `recruitopening001mb` (`jobId`,`jobName`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (5,'INFORMATION TECNOLOGY','closed','sheik','2022-02-11 07:15:39','sheik','2022-02-11 07:15:45'),
 (6,'Government Employee','open','siva','2022-10-20 16:41:39',NULL,NULL);
/*!40000 ALTER TABLE `recruitopening001mb` ENABLE KEYS */;


--
-- Definition of table `recruitrelieving001hb`
--

DROP TABLE IF EXISTS `recruitrelieving001hb`;
CREATE TABLE `recruitrelieving001hb` (
  `relievingId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantNamePrefix` varchar(30) NOT NULL,
  `applicantName` varchar(30) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `grade` varchar(30) NOT NULL,
  `line1` varchar(30) NOT NULL,
  `line2` varchar(30) NOT NULL,
  `cityOrVillage` varchar(30) NOT NULL,
  `stateOrTerritory` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `relievingLetter` varchar(45) NOT NULL,
  `dateOfJoin` datetime NOT NULL,
  `dateOfRelieve` datetime NOT NULL,
  `postalCode` int(11) NOT NULL,
  `phoneNo` varchar(15) DEFAULT NULL,
  `alternativePhoneNo` varchar(15) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`relievingId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitrelieving001hb`
--

/*!40000 ALTER TABLE `recruitrelieving001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruitrelieving001hb` ENABLE KEYS */;


--
-- Definition of table `recruitrelieving001mb`
--

DROP TABLE IF EXISTS `recruitrelieving001mb`;
CREATE TABLE `recruitrelieving001mb` (
  `relievingId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantNamePrefix` varchar(30) NOT NULL,
  `applicantName` varchar(30) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `grade` varchar(30) NOT NULL,
  `line1` varchar(30) NOT NULL,
  `line2` varchar(30) NOT NULL,
  `cityOrVillage` varchar(30) NOT NULL,
  `stateOrTerritory` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `relievingLetter` varchar(45) NOT NULL,
  `dateOfJoin` datetime NOT NULL,
  `dateOfRelieve` datetime NOT NULL,
  `postalCode` int(11) NOT NULL,
  `phoneNo` varchar(15) DEFAULT NULL,
  `alternativePhoneNo` varchar(15) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`relievingId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitrelieving001mb`
--

/*!40000 ALTER TABLE `recruitrelieving001mb` DISABLE KEYS */;
INSERT INTO `recruitrelieving001mb` (`relievingId`,`applicantNamePrefix`,`applicantName`,`companyName`,`position`,`grade`,`line1`,`line2`,`cityOrVillage`,`stateOrTerritory`,`country`,`relievingLetter`,`dateOfJoin`,`dateOfRelieve`,`postalCode`,`phoneNo`,`alternativePhoneNo`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (10,'Mr','SHEIK','NANDALALA','IT','BSC','GVDASHUFDJHA','UYFGJHFBAAD','THALAKUDI','TAMILNADU','INDIA','IUT D','2022-02-20 18:30:00','2022-02-24 18:30:00',621216,'9025762102','9443534057','sheik','2022-02-11 07:18:26','sheik','2022-02-11 07:18:32');
/*!40000 ALTER TABLE `recruitrelieving001mb` ENABLE KEYS */;


--
-- Definition of table `recruitworkingexperience001hb`
--

DROP TABLE IF EXISTS `recruitworkingexperience001hb`;
CREATE TABLE `recruitworkingexperience001hb` (
  `workingexperienceId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantNamePrefix` varchar(10) NOT NULL,
  `applicantName` varchar(45) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `grade` varchar(20) NOT NULL,
  `workingexperienceLetter` varchar(30) NOT NULL,
  `dateOfJoin` datetime NOT NULL,
  `dateOfRelieve` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`workingexperienceId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitworkingexperience001hb`
--

/*!40000 ALTER TABLE `recruitworkingexperience001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruitworkingexperience001hb` ENABLE KEYS */;


--
-- Definition of table `recruitworkingexperience001mb`
--

DROP TABLE IF EXISTS `recruitworkingexperience001mb`;
CREATE TABLE `recruitworkingexperience001mb` (
  `workingexperienceId` int(11) NOT NULL AUTO_INCREMENT,
  `applicantNamePrefix` varchar(10) NOT NULL,
  `applicantName` varchar(45) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `grade` varchar(20) NOT NULL,
  `workingexperienceLetter` varchar(30) NOT NULL,
  `dateOfJoin` datetime NOT NULL,
  `dateOfRelieve` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`workingexperienceId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recruitworkingexperience001mb`
--

/*!40000 ALTER TABLE `recruitworkingexperience001mb` DISABLE KEYS */;
INSERT INTO `recruitworkingexperience001mb` (`workingexperienceId`,`applicantNamePrefix`,`applicantName`,`companyName`,`position`,`grade`,`workingexperienceLetter`,`dateOfJoin`,`dateOfRelieve`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (14,'Mr','SHEIK','NANDALALA','IT','BSC','78456','2022-02-13 18:30:00','2022-02-25 18:30:00','sheik','2022-02-11 07:18:57','sheik','2022-02-11 07:19:08');
/*!40000 ALTER TABLE `recruitworkingexperience001mb` ENABLE KEYS */;


--
-- Definition of table `registration001hb`
--

DROP TABLE IF EXISTS `registration001hb`;
CREATE TABLE `registration001hb` (
  `registerid` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `domain` varchar(30) NOT NULL,
  `username` varchar(45) NOT NULL,
  `securityquestion` varchar(100) NOT NULL,
  `securityanswer` varchar(45) NOT NULL,
  `message` varchar(200) DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`registerid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration001hb`
--

/*!40000 ALTER TABLE `registration001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `registration001hb` ENABLE KEYS */;


--
-- Definition of table `registration001mb`
--

DROP TABLE IF EXISTS `registration001mb`;
CREATE TABLE `registration001mb` (
  `registerid` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `domain` varchar(30) NOT NULL,
  `username` varchar(45) NOT NULL,
  `securityquestion` varchar(100) NOT NULL,
  `securityanswer` varchar(45) NOT NULL,
  `message` varchar(200) DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`registerid`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration001mb`
--

/*!40000 ALTER TABLE `registration001mb` DISABLE KEYS */;
INSERT INTO `registration001mb` (`registerid`,`firstname`,`lastname`,`domain`,`username`,`securityquestion`,`securityanswer`,`message`,`status`,`email`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (49,'sss','sss','Construction','tamil','What was your childhood nickname ?','ee','ee','In Progress','','','0000-00-00 00:00:00',NULL,NULL),
 (50,'abc','cde','Buying House','raj','In what city did you meet your spouse/significant other ?','aaa','aa','In Progress','','','0000-00-00 00:00:00',NULL,NULL),
 (51,'selvam S','R','Manufacturing','selvamRaja','In what city did you meet your spouse/significant other ?','dfg','sg','Authorization','selvamrsraja@gmail.com','','0000-00-00 00:00:00',NULL,NULL),
 (69,'latha','B','Manufacturing','latha','What is your oldest sibling\'s middle name ?','ghn','fd','New','latha0707hema@gmail.com','insertuser','2021-09-03 11:12:07',NULL,NULL),
 (70,'aaa','s','Calibration Labs','aaa','What school did you attend for sixth grade ?','dfs','sdfv','New','latha0707hema@gmail.com','insertuser','2021-09-03 11:19:04',NULL,NULL),
 (72,'fff','s','Construction','fff','What is the name of your favorite childhood friend ?','sss','xfdv','In Progress','hema0707latha@gmail.com','insertuser','2021-09-03 11:46:35','updateuser','2021-09-03 11:46:54'),
 (73,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:18:33',NULL,NULL),
 (74,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:19:15',NULL,NULL),
 (75,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:19:27',NULL,NULL),
 (76,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:19:28',NULL,NULL),
 (77,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:19:28',NULL,NULL),
 (78,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:19:54',NULL,NULL),
 (79,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:19:54',NULL,NULL),
 (80,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:19:54',NULL,NULL),
 (81,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:21:41',NULL,NULL),
 (82,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:21:42',NULL,NULL),
 (83,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:21:53',NULL,NULL),
 (84,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','ss','sss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:21:53',NULL,NULL),
 (85,'rizwana','Shahul Hameed','Manufacturing','rizwana','What was your childhood nickname ?','SS','ss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:25:01',NULL,NULL),
 (86,'rizwana','Shahul Hameed','Manufacturing','rizwana','What was your childhood nickname ?','SS','ss','In Progress','rizwana2622@gmail.com','insertuser','2021-09-06 13:25:17',NULL,NULL),
 (87,'shameem','hameed','Manufacturing','Shameem','What was your childhood nickname ?','ss','good','In Progress','shameemhameed4@gmail.com','siva','2021-12-01 12:26:20',NULL,NULL),
 (88,'sridharan','M','manufacturing','dharunsri689@gmail.com','What was your childhood nickname ?','good','DemoRegistration','In Progress','dharunsri689@gmail.com','sekar','2021-12-14 04:37:57',NULL,NULL),
 (89,'rizwana','rizwana','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:44:45',NULL,NULL),
 (90,'rizwana','rizwana','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:45:17',NULL,NULL),
 (91,'rizwana','rizwana','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:45:20',NULL,NULL),
 (92,'rizwana','rizwana','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:45:21',NULL,NULL),
 (93,'rizwana','rizwana','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:45:21',NULL,NULL),
 (94,'rizwana','rizwana','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:45:21',NULL,NULL),
 (95,'rizwana','rizwana','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:45:35',NULL,NULL),
 (96,'rizwana','begam','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:46:52',NULL,NULL),
 (97,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:47:26',NULL,NULL),
 (98,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:47:27',NULL,NULL),
 (99,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:47:28',NULL,NULL),
 (100,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:47:29',NULL,NULL),
 (101,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:47:29',NULL,NULL),
 (102,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:47:29',NULL,NULL),
 (103,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:47:29',NULL,NULL),
 (104,'rizwana','s','Manufacturing','rizwana','What was your childhood nickname ?','hfhtg','ygh','In Progress','rizwana2622@gmail.com','siva','2022-01-21 09:47:30',NULL,NULL),
 (105,'Vasudevan','Sampath','Manufacturing','VasuERP','In what city did you meet your spouse/significant other ?','Kumbakonam','test','New','vsvasudevan931@gmail.com','Shameem','2022-02-01 08:51:24',NULL,NULL),
 (106,'Vasudevan','Sampath','Manufacturing','VasuERP','In what city did you meet your spouse/significant other ?','Kumbakonam','test','New','vsvasudevan931@gmail.com','Shameem','2022-02-01 08:51:31',NULL,NULL),
 (107,'Vasudevan','Sampath','Manufacturing','VasuERP','In what city did you meet your spouse/significant other ?','Kumbakonam','test','New','vsvasudevan931@gmail.com','Shameem','2022-02-01 08:51:37',NULL,NULL),
 (108,'Vasudevan','Sampath','Manufacturing','VasuERP','In what city did you meet your spouse/significant other ?','Kumbakonam','test','New','vsvasudevan931@gmail.com','Shameem','2022-02-01 08:51:38',NULL,NULL),
 (109,'Vasudevan','Sampath','Manufacturing','VasuERP','In what city did you meet your spouse/significant other ?','Kumbakonam','test','New','vsvasudevan931@gmail.com','Shameem','2022-02-01 08:51:39',NULL,NULL),
 (110,'vasudevan','v','Manufacturing','vasuERP','What was your childhood nickname ?','vasu','good','In Progress','v.s.vasudevan@nandalalainfotech.com','latha','2022-02-01 09:26:50',NULL,NULL),
 (111,'vasudevan','v','Manufacturing','vasuERP','What was your childhood nickname ?','vasu','good','In Progress','v.s.vasudevan@nandalalainfotech.com','latha','2022-02-01 09:27:33',NULL,NULL);
/*!40000 ALTER TABLE `registration001mb` ENABLE KEYS */;


--
-- Definition of table `reqitemorder001hb`
--

DROP TABLE IF EXISTS `reqitemorder001hb`;
CREATE TABLE `reqitemorder001hb` (
  `mrsId` int(11) NOT NULL AUTO_INCREMENT,
  `mrSeries` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `orderedqty` int(11) DEFAULT NULL,
  `qtyrtoorder` int(11) DEFAULT NULL,
  `qtytoorder` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`mrsId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reqitemorder001hb`
--

/*!40000 ALTER TABLE `reqitemorder001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `reqitemorder001hb` ENABLE KEYS */;


--
-- Definition of table `reqitemorder001mb`
--

DROP TABLE IF EXISTS `reqitemorder001mb`;
CREATE TABLE `reqitemorder001mb` (
  `mrsId` int(11) NOT NULL AUTO_INCREMENT,
  `mrSeries` varchar(50) NOT NULL,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `company` varchar(40) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `orderedqty` int(11) DEFAULT NULL,
  `qtyrtoorder` int(11) DEFAULT NULL,
  `qtytoorder` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`mrsId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reqitemorder001mb`
--

/*!40000 ALTER TABLE `reqitemorder001mb` DISABLE KEYS */;
INSERT INTO `reqitemorder001mb` (`mrsId`,`mrSeries`,`itemCode`,`description`,`company`,`date`,`quantity`,`orderedqty`,`qtyrtoorder`,`qtytoorder`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (14,'54','2424','JUIF','NANDALALA','2022-02-14 18:30:00',5,76,6,87655,'sheik','2022-02-11 06:18:21','sheik','2022-02-11 06:18:41');
/*!40000 ALTER TABLE `reqitemorder001mb` ENABLE KEYS */;


--
-- Definition of table `reqitemtransfer001hb`
--

DROP TABLE IF EXISTS `reqitemtransfer001hb`;
CREATE TABLE `reqitemtransfer001hb` (
  `ittransId` int(11) NOT NULL AUTO_INCREMENT,
  `mrSeries` varchar(50) NOT NULL,
  `transferQty` decimal(12,4) DEFAULT NULL,
  `qtytoTransfer` decimal(12,4) DEFAULT NULL,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `company` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ittransId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reqitemtransfer001hb`
--

/*!40000 ALTER TABLE `reqitemtransfer001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `reqitemtransfer001hb` ENABLE KEYS */;


--
-- Definition of table `reqitemtransfer001mb`
--

DROP TABLE IF EXISTS `reqitemtransfer001mb`;
CREATE TABLE `reqitemtransfer001mb` (
  `ittransId` int(11) NOT NULL AUTO_INCREMENT,
  `mrSeries` varchar(50) NOT NULL,
  `transferQty` decimal(12,4) DEFAULT NULL,
  `qtytoTransfer` decimal(12,4) DEFAULT NULL,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `company` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ittransId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reqitemtransfer001mb`
--

/*!40000 ALTER TABLE `reqitemtransfer001mb` DISABLE KEYS */;
INSERT INTO `reqitemtransfer001mb` (`ittransId`,`mrSeries`,`transferQty`,`qtytoTransfer`,`itemCode`,`description`,`company`,`date`,`quantity`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,'544','8768.0000','12154.0000','222','DFGDSGJI','NANDALALA','2022-02-14 18:30:00',5,'sheik','2022-02-11 11:57:17','sheik','2022-02-11 11:57:24');
/*!40000 ALTER TABLE `reqitemtransfer001mb` ENABLE KEYS */;


--
-- Definition of table `requestitembuy001hb`
--

DROP TABLE IF EXISTS `requestitembuy001hb`;
CREATE TABLE `requestitembuy001hb` (
  `riId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(40) NOT NULL,
  `warehouse` varchar(40) NOT NULL,
  `actual` int(11) NOT NULL,
  `requested` int(11) DEFAULT NULL,
  `reserved` int(11) DEFAULT NULL,
  `ordered` int(11) DEFAULT NULL,
  `projected` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`riId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `requestitembuy001hb`
--

/*!40000 ALTER TABLE `requestitembuy001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `requestitembuy001hb` ENABLE KEYS */;


--
-- Definition of table `requestitembuy001mb`
--

DROP TABLE IF EXISTS `requestitembuy001mb`;
CREATE TABLE `requestitembuy001mb` (
  `riId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(40) NOT NULL,
  `warehouse` varchar(40) NOT NULL,
  `actual` int(11) NOT NULL,
  `requested` int(11) DEFAULT NULL,
  `reserved` int(11) DEFAULT NULL,
  `ordered` int(11) DEFAULT NULL,
  `projected` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`riId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `requestitembuy001mb`
--

/*!40000 ALTER TABLE `requestitembuy001mb` DISABLE KEYS */;
INSERT INTO `requestitembuy001mb` (`riId`,`itemCode`,`warehouse`,`actual`,`requested`,`reserved`,`ordered`,`projected`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (2,'2424','2',45,7878,125,7895,2157,'sheik','2022-02-11 06:17:49','sheik','2022-02-11 06:17:56');
/*!40000 ALTER TABLE `requestitembuy001mb` ENABLE KEYS */;


--
-- Definition of table `role001hb`
--

DROP TABLE IF EXISTS `role001hb`;
CREATE TABLE `role001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rlid` int(11) NOT NULL,
  `rolename` varchar(40) NOT NULL,
  `status` char(1) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rlid` (`rlid`),
  CONSTRAINT `role001hb_ibfk_1` FOREIGN KEY (`rlid`) REFERENCES `user001hb` (`person_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role001hb`
--

/*!40000 ALTER TABLE `role001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `role001hb` ENABLE KEYS */;


--
-- Definition of table `role001mb`
--

DROP TABLE IF EXISTS `role001mb`;
CREATE TABLE `role001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rlid` int(11) NOT NULL,
  `rolename` varchar(40) NOT NULL,
  `status` char(1) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rlid` (`rlid`),
  CONSTRAINT `role001mb_ibfk_1` FOREIGN KEY (`rlid`) REFERENCES `user001mb` (`person_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role001mb`
--

/*!40000 ALTER TABLE `role001mb` DISABLE KEYS */;
INSERT INTO `role001mb` (`id`,`rlid`,`rolename`,`status`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (2,1,'Super Admin','Y','aditi','2023-01-12 13:59:35',NULL,NULL);
/*!40000 ALTER TABLE `role001mb` ENABLE KEYS */;


--
-- Definition of table `salarycomponent001hb`
--

DROP TABLE IF EXISTS `salarycomponent001hb`;
CREATE TABLE `salarycomponent001hb` (
  `salcompId` int(11) NOT NULL AUTO_INCREMENT,
  `comName` varchar(50) DEFAULT NULL,
  `abbr` varchar(30) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`salcompId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salarycomponent001hb`
--

/*!40000 ALTER TABLE `salarycomponent001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `salarycomponent001hb` ENABLE KEYS */;


--
-- Definition of table `salarycomponent001mb`
--

DROP TABLE IF EXISTS `salarycomponent001mb`;
CREATE TABLE `salarycomponent001mb` (
  `salcompId` int(11) NOT NULL AUTO_INCREMENT,
  `comName` varchar(50) DEFAULT NULL,
  `abbr` varchar(30) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`salcompId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salarycomponent001mb`
--

/*!40000 ALTER TABLE `salarycomponent001mb` DISABLE KEYS */;
INSERT INTO `salarycomponent001mb` (`salcompId`,`comName`,`abbr`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (11,'NANDALALA','HARD WORK','sheik','2022-02-11 07:28:30','sheik','2022-02-11 07:28:54');
/*!40000 ALTER TABLE `salarycomponent001mb` ENABLE KEYS */;


--
-- Definition of table `salarystructure001hb`
--

DROP TABLE IF EXISTS `salarystructure001hb`;
CREATE TABLE `salarystructure001hb` (
  `strId` int(11) NOT NULL AUTO_INCREMENT,
  `empName` varchar(30) DEFAULT NULL,
  `isActive` varchar(20) NOT NULL,
  `fromDate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`strId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salarystructure001hb`
--

/*!40000 ALTER TABLE `salarystructure001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `salarystructure001hb` ENABLE KEYS */;


--
-- Definition of table `salarystructure001mb`
--

DROP TABLE IF EXISTS `salarystructure001mb`;
CREATE TABLE `salarystructure001mb` (
  `strId` int(11) NOT NULL AUTO_INCREMENT,
  `empName` varchar(30) DEFAULT NULL,
  `isActive` varchar(20) NOT NULL,
  `fromDate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`strId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salarystructure001mb`
--

/*!40000 ALTER TABLE `salarystructure001mb` DISABLE KEYS */;
INSERT INTO `salarystructure001mb` (`strId`,`empName`,`isActive`,`fromDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (5,'Dummy2','No','2022-02-14 18:30:00','sheik','2022-02-11 07:28:07','sheik','2022-02-11 07:28:15');
/*!40000 ALTER TABLE `salarystructure001mb` ENABLE KEYS */;


--
-- Definition of table `salesorder001hb`
--

DROP TABLE IF EXISTS `salesorder001hb`;
CREATE TABLE `salesorder001hb` (
  `Sorder` int(11) NOT NULL AUTO_INCREMENT,
  `Customername` varchar(50) NOT NULL,
  `Cpurchaseorder` varchar(60) DEFAULT NULL,
  `Statusname` varchar(255) DEFAULT NULL,
  `Itemid` int(11) DEFAULT NULL,
  `Orderid` int(11) DEFAULT NULL,
  `Itemcode` varchar(40) DEFAULT NULL,
  `Ordername` varchar(255) DEFAULT NULL,
  `Statusid` int(11) DEFAULT NULL,
  `Sdeliverydate` datetime DEFAULT NULL,
  `Sorderdate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Sorder`),
  KEY `Itemid` (`Itemid`),
  KEY `Orderid` (`Orderid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salesorder001hb`
--

/*!40000 ALTER TABLE `salesorder001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `salesorder001hb` ENABLE KEYS */;


--
-- Definition of table `salesorder001mb`
--

DROP TABLE IF EXISTS `salesorder001mb`;
CREATE TABLE `salesorder001mb` (
  `Sorder` int(11) NOT NULL AUTO_INCREMENT,
  `Customername` varchar(50) NOT NULL,
  `Cpurchaseorder` varchar(60) DEFAULT NULL,
  `Statusname` varchar(255) DEFAULT NULL,
  `Itemid` int(11) DEFAULT NULL,
  `Orderid` int(11) DEFAULT NULL,
  `Itemcode` varchar(40) DEFAULT NULL,
  `Ordername` varchar(255) DEFAULT NULL,
  `Statusid` int(11) DEFAULT NULL,
  `Sdeliverydate` datetime DEFAULT NULL,
  `Sorderdate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Sorder`),
  KEY `Itemid` (`Itemid`),
  KEY `Orderid` (`Orderid`)
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salesorder001mb`
--

/*!40000 ALTER TABLE `salesorder001mb` DISABLE KEYS */;
INSERT INTO `salesorder001mb` (`Sorder`,`Customername`,`Cpurchaseorder`,`Statusname`,`Itemid`,`Orderid`,`Itemcode`,`Ordername`,`Statusid`,`Sdeliverydate`,`Sorderdate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (156,'SHEIK','45646','Queued for Saving',NULL,NULL,'222','Dummy1',NULL,'2022-02-15 18:30:00','2022-02-13 18:30:00','sheik','2022-02-11 12:17:04','sheik','2022-02-11 12:17:10');
/*!40000 ALTER TABLE `salesorder001mb` ENABLE KEYS */;


--
-- Definition of table `salesregister001hb`
--

DROP TABLE IF EXISTS `salesregister001hb`;
CREATE TABLE `salesregister001hb` (
  `regId` int(11) NOT NULL AUTO_INCREMENT,
  `customername` varchar(50) NOT NULL,
  `customergroup` varchar(50) NOT NULL,
  `terName` varchar(50) NOT NULL,
  `accountType` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `projectname` varchar(50) NOT NULL,
  `remarks` varchar(150) NOT NULL,
  `salesCode` varchar(50) NOT NULL,
  `delNote` varchar(50) NOT NULL,
  `gainloss` decimal(12,4) DEFAULT NULL,
  `saleswpl` decimal(12,4) DEFAULT NULL,
  `netTotal` decimal(12,4) DEFAULT NULL,
  `totalTax` decimal(12,4) DEFAULT NULL,
  `grandTotal` decimal(12,4) DEFAULT NULL,
  `roundedTotal` decimal(12,4) DEFAULT NULL,
  `outstandAmt` decimal(12,4) DEFAULT NULL,
  `postingDate` datetime NOT NULL,
  `currency` varchar(255) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`regId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salesregister001hb`
--

/*!40000 ALTER TABLE `salesregister001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `salesregister001hb` ENABLE KEYS */;


--
-- Definition of table `salesregister001mb`
--

DROP TABLE IF EXISTS `salesregister001mb`;
CREATE TABLE `salesregister001mb` (
  `regId` int(11) NOT NULL AUTO_INCREMENT,
  `customername` varchar(50) NOT NULL,
  `customergroup` varchar(50) NOT NULL,
  `terName` varchar(50) NOT NULL,
  `accountType` varchar(50) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `projectname` varchar(50) NOT NULL,
  `remarks` varchar(150) NOT NULL,
  `salesCode` varchar(50) NOT NULL,
  `delNote` varchar(50) NOT NULL,
  `gainloss` decimal(12,4) DEFAULT NULL,
  `saleswpl` decimal(12,4) DEFAULT NULL,
  `netTotal` decimal(12,4) DEFAULT NULL,
  `totalTax` decimal(12,4) DEFAULT NULL,
  `grandTotal` decimal(12,4) DEFAULT NULL,
  `roundedTotal` decimal(12,4) DEFAULT NULL,
  `outstandAmt` decimal(12,4) DEFAULT NULL,
  `postingDate` datetime NOT NULL,
  `currency` varchar(255) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`regId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salesregister001mb`
--

/*!40000 ALTER TABLE `salesregister001mb` DISABLE KEYS */;
INSERT INTO `salesregister001mb` (`regId`,`customername`,`customergroup`,`terName`,`accountType`,`paymentMode`,`projectname`,`remarks`,`salesCode`,`delNote`,`gainloss`,`saleswpl`,`netTotal`,`totalTax`,`grandTotal`,`roundedTotal`,`outstandAmt`,`postingDate`,`currency`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (14,'Dummy3','Dummy1','Rest of the World','Stock Received','Wire Transfer','Dummy1','DONE','SFA','DDAFD','4462.0000','789768.0000','124665.0000','321654.0000','78456.0000','121534.0000','7874.0000','2022-02-11 18:30:00','USD','sheik','2022-02-11 04:28:45','sheik','2022-02-11 04:29:05');
/*!40000 ALTER TABLE `salesregister001mb` ENABLE KEYS */;


--
-- Definition of table `salestaxesandtemplates001hb`
--

DROP TABLE IF EXISTS `salestaxesandtemplates001hb`;
CREATE TABLE `salestaxesandtemplates001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `accounthead` varchar(45) NOT NULL,
  `rate` int(10) unsigned NOT NULL,
  `amount` int(10) unsigned NOT NULL,
  `total` int(10) unsigned NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salestaxesandtemplates001hb`
--

/*!40000 ALTER TABLE `salestaxesandtemplates001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `salestaxesandtemplates001hb` ENABLE KEYS */;


--
-- Definition of table `salestaxesandtemplates001mb`
--

DROP TABLE IF EXISTS `salestaxesandtemplates001mb`;
CREATE TABLE `salestaxesandtemplates001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `accounthead` varchar(45) NOT NULL,
  `rate` int(10) unsigned NOT NULL,
  `amount` int(10) unsigned NOT NULL,
  `total` int(10) unsigned NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salestaxesandtemplates001mb`
--

/*!40000 ALTER TABLE `salestaxesandtemplates001mb` DISABLE KEYS */;
INSERT INTO `salestaxesandtemplates001mb` (`id`,`title`,`company`,`type`,`accounthead`,`rate`,`amount`,`total`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (11,'NANDALALA','NANDALALA','SOFTWARE','SHEIK',1000,2000,30000,'sheik','2022-02-11 04:24:41','sheik','2022-02-11 04:25:02');
/*!40000 ALTER TABLE `salestaxesandtemplates001mb` ENABLE KEYS */;


--
-- Definition of table `setupcugrp001hb`
--

DROP TABLE IF EXISTS `setupcugrp001hb`;
CREATE TABLE `setupcugrp001hb` (
  `cugrpId` int(11) NOT NULL AUTO_INCREMENT,
  `customergroup` varchar(40) NOT NULL,
  `salesPerson` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`cugrpId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setupcugrp001hb`
--

/*!40000 ALTER TABLE `setupcugrp001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `setupcugrp001hb` ENABLE KEYS */;


--
-- Definition of table `setupcugrp001mb`
--

DROP TABLE IF EXISTS `setupcugrp001mb`;
CREATE TABLE `setupcugrp001mb` (
  `cugrpId` int(11) NOT NULL AUTO_INCREMENT,
  `customergroup` varchar(40) NOT NULL,
  `salesPerson` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`cugrpId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setupcugrp001mb`
--

/*!40000 ALTER TABLE `setupcugrp001mb` DISABLE KEYS */;
INSERT INTO `setupcugrp001mb` (`cugrpId`,`customergroup`,`salesPerson`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,'45','EXPRE','sheik','2022-02-11 10:14:11','sheik','2022-02-11 10:14:22'),
 (5,'dsdfs','fsf','siva','2022-10-20 16:28:46',NULL,NULL);
/*!40000 ALTER TABLE `setupcugrp001mb` ENABLE KEYS */;


--
-- Definition of table `shippingrule001hb`
--

DROP TABLE IF EXISTS `shippingrule001hb`;
CREATE TABLE `shippingrule001hb` (
  `sruleId` int(11) NOT NULL AUTO_INCREMENT,
  `sruleName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `sruleLabel` varchar(50) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`sruleId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shippingrule001hb`
--

/*!40000 ALTER TABLE `shippingrule001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `shippingrule001hb` ENABLE KEYS */;


--
-- Definition of table `shippingrule001mb`
--

DROP TABLE IF EXISTS `shippingrule001mb`;
CREATE TABLE `shippingrule001mb` (
  `sruleId` int(11) NOT NULL AUTO_INCREMENT,
  `sruleName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `sruleLabel` varchar(50) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`sruleId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shippingrule001mb`
--

/*!40000 ALTER TABLE `shippingrule001mb` DISABLE KEYS */;
INSERT INTO `shippingrule001mb` (`sruleId`,`sruleName`,`status`,`sruleLabel`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (14,'SHEIK','Disabled','42345432','sheik','2022-02-11 10:48:20','sheik','2022-02-11 10:48:31');
/*!40000 ALTER TABLE `shippingrule001mb` ENABLE KEYS */;


--
-- Definition of table `status001hb`
--

DROP TABLE IF EXISTS `status001hb`;
CREATE TABLE `status001hb` (
  `Statusid` int(11) NOT NULL AUTO_INCREMENT,
  `Statusname` varchar(40) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Statusid`),
  UNIQUE KEY `Statusname` (`Statusname`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status001hb`
--

/*!40000 ALTER TABLE `status001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `status001hb` ENABLE KEYS */;


--
-- Definition of table `status001mb`
--

DROP TABLE IF EXISTS `status001mb`;
CREATE TABLE `status001mb` (
  `Statusid` int(11) NOT NULL AUTO_INCREMENT,
  `Statusname` varchar(40) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`Statusid`),
  UNIQUE KEY `Statusname` (`Statusname`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status001mb`
--

/*!40000 ALTER TABLE `status001mb` DISABLE KEYS */;
INSERT INTO `status001mb` (`Statusid`,`Statusname`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'To Deliver','','0000-00-00 00:00:00',NULL,NULL),
 (2,'Draft','','0000-00-00 00:00:00',NULL,NULL),
 (3,'Completed','','0000-00-00 00:00:00',NULL,NULL),
 (4,'To Bill','','0000-00-00 00:00:00',NULL,NULL),
 (5,'Closed','','0000-00-00 00:00:00',NULL,NULL),
 (6,'Cancelled','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `status001mb` ENABLE KEYS */;


--
-- Definition of table `stkreconcile001hb`
--

DROP TABLE IF EXISTS `stkreconcile001hb`;
CREATE TABLE `stkreconcile001hb` (
  `stkrecId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `diffAcc` varchar(50) DEFAULT NULL,
  `costCenter` varchar(50) DEFAULT NULL,
  `postingDate` datetime NOT NULL,
  `postingTime` time NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stkrecId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkreconcile001hb`
--

/*!40000 ALTER TABLE `stkreconcile001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stkreconcile001hb` ENABLE KEYS */;


--
-- Definition of table `stkreconcile001mb`
--

DROP TABLE IF EXISTS `stkreconcile001mb`;
CREATE TABLE `stkreconcile001mb` (
  `stkrecId` int(11) NOT NULL AUTO_INCREMENT,
  `series` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `diffAcc` varchar(50) DEFAULT NULL,
  `costCenter` varchar(50) DEFAULT NULL,
  `postingDate` datetime NOT NULL,
  `postingTime` time NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stkrecId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkreconcile001mb`
--

/*!40000 ALTER TABLE `stkreconcile001mb` DISABLE KEYS */;
INSERT INTO `stkreconcile001mb` (`stkrecId`,`series`,`company`,`diffAcc`,`costCenter`,`postingDate`,`postingTime`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (2,'45','NANDALALA','4564645646','7516','2022-02-13 18:30:00','10:16:20','sheik','2022-02-11 11:16:31',NULL,NULL),
 (3,'SER_002','nadsad','12636','4236','2022-10-04 00:00:00','16:48:07','siva','2022-10-20 17:49:24',NULL,NULL);
/*!40000 ALTER TABLE `stkreconcile001mb` ENABLE KEYS */;


--
-- Definition of table `stkrepageing001hb`
--

DROP TABLE IF EXISTS `stkrepageing001hb`;
CREATE TABLE `stkrepageing001hb` (
  `stageId` int(11) NOT NULL AUTO_INCREMENT,
  `UOM` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `averageAge` int(11) DEFAULT NULL,
  `earliest` int(11) DEFAULT NULL,
  `latest` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stageId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepageing001hb`
--

/*!40000 ALTER TABLE `stkrepageing001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stkrepageing001hb` ENABLE KEYS */;


--
-- Definition of table `stkrepageing001mb`
--

DROP TABLE IF EXISTS `stkrepageing001mb`;
CREATE TABLE `stkrepageing001mb` (
  `stageId` int(11) NOT NULL AUTO_INCREMENT,
  `UOM` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `averageAge` int(11) DEFAULT NULL,
  `earliest` int(11) DEFAULT NULL,
  `latest` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stageId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepageing001mb`
--

/*!40000 ALTER TABLE `stkrepageing001mb` DISABLE KEYS */;
INSERT INTO `stkrepageing001mb` (`stageId`,`UOM`,`brand`,`description`,`itemCode`,`itemGroup`,`averageAge`,`earliest`,`latest`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (6,'SHEIK','BMW','VERY GOOD','222','Sub Assemblies',26,5646,4565,'sheik','2022-02-11 10:43:02','sheik','2022-02-11 10:43:19');
/*!40000 ALTER TABLE `stkrepageing001mb` ENABLE KEYS */;


--
-- Definition of table `stkrepbalance001hb`
--

DROP TABLE IF EXISTS `stkrepbalance001hb`;
CREATE TABLE `stkrepbalance001hb` (
  `stbalId` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `stkUOM` varchar(255) DEFAULT NULL,
  `wareHouse` varchar(255) DEFAULT NULL,
  `balanceQty` int(11) DEFAULT NULL,
  `balanceValue` int(11) DEFAULT NULL,
  `inQty` int(11) DEFAULT NULL,
  `openingQty` int(11) DEFAULT NULL,
  `openingValue` int(11) DEFAULT NULL,
  `outQty` int(11) DEFAULT NULL,
  `outValue` int(11) DEFAULT NULL,
  `valuationRate` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stbalId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepbalance001hb`
--

/*!40000 ALTER TABLE `stkrepbalance001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stkrepbalance001hb` ENABLE KEYS */;


--
-- Definition of table `stkrepbalance001mb`
--

DROP TABLE IF EXISTS `stkrepbalance001mb`;
CREATE TABLE `stkrepbalance001mb` (
  `stbalId` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `stkUOM` varchar(255) DEFAULT NULL,
  `wareHouse` varchar(255) DEFAULT NULL,
  `balanceQty` int(11) DEFAULT NULL,
  `balanceValue` int(11) DEFAULT NULL,
  `inQty` int(11) DEFAULT NULL,
  `openingQty` int(11) DEFAULT NULL,
  `openingValue` int(11) DEFAULT NULL,
  `outQty` int(11) DEFAULT NULL,
  `outValue` int(11) DEFAULT NULL,
  `valuationRate` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stbalId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepbalance001mb`
--

/*!40000 ALTER TABLE `stkrepbalance001mb` DISABLE KEYS */;
INSERT INTO `stkrepbalance001mb` (`stbalId`,`brand`,`company`,`description`,`itemCode`,`itemGroup`,`stkUOM`,`wareHouse`,`balanceQty`,`balanceValue`,`inQty`,`openingQty`,`openingValue`,`outQty`,`outValue`,`valuationRate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (10,'BMW','NANDALALA','BAD WORK','222','Raw Materials','78','5',78545,1254,1524,456,754,1567,786,132,'sheik','2022-02-11 10:41:27','sheik','2022-02-11 10:41:33');
/*!40000 ALTER TABLE `stkrepbalance001mb` ENABLE KEYS */;


--
-- Definition of table `stkrepledger001hb`
--

DROP TABLE IF EXISTS `stkrepledger001hb`;
CREATE TABLE `stkrepledger001hb` (
  `stledId` int(11) NOT NULL AUTO_INCREMENT,
  `batch` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `serialNo` varchar(255) DEFAULT NULL,
  `stkUOM` varchar(255) DEFAULT NULL,
  `voucherCode` varchar(255) DEFAULT NULL,
  `voucherType` varchar(255) DEFAULT NULL,
  `wareHouse` varchar(255) DEFAULT NULL,
  `balanceQty` int(11) DEFAULT NULL,
  `balanceValue` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `incomingRate` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `valuationRate` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stledId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepledger001hb`
--

/*!40000 ALTER TABLE `stkrepledger001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stkrepledger001hb` ENABLE KEYS */;


--
-- Definition of table `stkrepledger001mb`
--

DROP TABLE IF EXISTS `stkrepledger001mb`;
CREATE TABLE `stkrepledger001mb` (
  `stledId` int(11) NOT NULL AUTO_INCREMENT,
  `batch` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `serialNo` varchar(255) DEFAULT NULL,
  `stkUOM` varchar(255) DEFAULT NULL,
  `voucherCode` varchar(255) DEFAULT NULL,
  `voucherType` varchar(255) DEFAULT NULL,
  `wareHouse` varchar(255) DEFAULT NULL,
  `balanceQty` int(11) DEFAULT NULL,
  `balanceValue` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `incomingRate` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `valuationRate` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stledId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepledger001mb`
--

/*!40000 ALTER TABLE `stkrepledger001mb` DISABLE KEYS */;
INSERT INTO `stkrepledger001mb` (`stledId`,`batch`,`brand`,`company`,`description`,`itemCode`,`itemGroup`,`serialNo`,`stkUOM`,`voucherCode`,`voucherType`,`wareHouse`,`balanceQty`,`balanceValue`,`date`,`incomingRate`,`quantity`,`valuationRate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (3,'1354','BMW','NANDALALA','GOOD DAY BRO','222','Sub Assemblies','12','78','786765','Purchase Receipt','5',78545,1254,'2022-02-14 00:00:00',123456,2,132,'sheik','2022-02-11 10:40:27','siva','2022-11-25 16:23:03'),
 (4,'wq','rer','sdsd','sasas','123','Raw Materials','32','gg','ewe','Purchase Receipt','fsf',32,21,'2022-11-11 00:00:00',322,13,434,'siva','2022-11-25 16:22:35',NULL,NULL);
/*!40000 ALTER TABLE `stkrepledger001mb` ENABLE KEYS */;


--
-- Definition of table `stkrepproject001hb`
--

DROP TABLE IF EXISTS `stkrepproject001hb`;
CREATE TABLE `stkrepproject001hb` (
  `stprojId` int(11) NOT NULL AUTO_INCREMENT,
  `UOM` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `wareHouse` varchar(255) DEFAULT NULL,
  `actualQty` int(11) DEFAULT NULL,
  `orderedQty` int(11) DEFAULT NULL,
  `plannedQty` int(11) DEFAULT NULL,
  `reorderQty` int(11) DEFAULT NULL,
  `reorderValue` int(11) DEFAULT NULL,
  `requestedQty` int(11) DEFAULT NULL,
  `reservedQty` int(11) DEFAULT NULL,
  `shortageQty` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stprojId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepproject001hb`
--

/*!40000 ALTER TABLE `stkrepproject001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stkrepproject001hb` ENABLE KEYS */;


--
-- Definition of table `stkrepproject001mb`
--

DROP TABLE IF EXISTS `stkrepproject001mb`;
CREATE TABLE `stkrepproject001mb` (
  `stprojId` int(11) NOT NULL AUTO_INCREMENT,
  `UOM` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemCode` varchar(255) DEFAULT NULL,
  `itemGroup` varchar(255) DEFAULT NULL,
  `wareHouse` varchar(255) DEFAULT NULL,
  `actualQty` int(11) DEFAULT NULL,
  `orderedQty` int(11) DEFAULT NULL,
  `plannedQty` int(11) DEFAULT NULL,
  `reorderQty` int(11) DEFAULT NULL,
  `reorderValue` int(11) DEFAULT NULL,
  `requestedQty` int(11) DEFAULT NULL,
  `reservedQty` int(11) DEFAULT NULL,
  `shortageQty` int(11) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stprojId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stkrepproject001mb`
--

/*!40000 ALTER TABLE `stkrepproject001mb` DISABLE KEYS */;
INSERT INTO `stkrepproject001mb` (`stprojId`,`UOM`,`brand`,`description`,`itemCode`,`itemGroup`,`wareHouse`,`actualQty`,`orderedQty`,`plannedQty`,`reorderQty`,`reorderValue`,`requestedQty`,`reservedQty`,`shortageQty`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (4,'SHEIK','BMW','GOOD CALL EWOR','222','Raw Materials','5',867,5464,5,7468,768,574654,1346,74354,'sheik','2022-02-11 10:42:13','sheik','2022-02-11 10:42:22');
/*!40000 ALTER TABLE `stkrepproject001mb` ENABLE KEYS */;


--
-- Definition of table `stksettings001hb`
--

DROP TABLE IF EXISTS `stksettings001hb`;
CREATE TABLE `stksettings001hb` (
  `setId` int(11) NOT NULL AUTO_INCREMENT,
  `itemnameBy` varchar(30) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `allowancePercent` decimal(12,4) DEFAULT NULL,
  `defaultUOM` varchar(20) NOT NULL,
  `warehouseName` varchar(50) NOT NULL,
  `showbarcodeField` char(1) NOT NULL,
  `autoinsertPricelist` char(1) NOT NULL,
  `autosetSerialno` char(1) NOT NULL,
  `allownegativeStock` char(1) NOT NULL,
  `defaultValue` varchar(255) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`setId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stksettings001hb`
--

/*!40000 ALTER TABLE `stksettings001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stksettings001hb` ENABLE KEYS */;


--
-- Definition of table `stksettings001mb`
--

DROP TABLE IF EXISTS `stksettings001mb`;
CREATE TABLE `stksettings001mb` (
  `setId` int(11) NOT NULL AUTO_INCREMENT,
  `itemnameBy` varchar(30) NOT NULL,
  `itemGroup` varchar(50) NOT NULL,
  `allowancePercent` decimal(12,4) DEFAULT NULL,
  `defaultUOM` varchar(20) NOT NULL,
  `warehouseName` varchar(50) NOT NULL,
  `showbarcodeField` char(1) NOT NULL,
  `autoinsertPricelist` char(1) NOT NULL,
  `autosetSerialno` char(1) NOT NULL,
  `allownegativeStock` char(1) NOT NULL,
  `defaultValue` varchar(255) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`setId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stksettings001mb`
--

/*!40000 ALTER TABLE `stksettings001mb` DISABLE KEYS */;
INSERT INTO `stksettings001mb` (`setId`,`itemnameBy`,`itemGroup`,`allowancePercent`,`defaultUOM`,`warehouseName`,`showbarcodeField`,`autoinsertPricelist`,`autosetSerialno`,`allownegativeStock`,`defaultValue`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (13,'ItemCode','Electrical','4654.0000','454','SPL','1','1','1','1','FIFO','sheik','2022-02-11 11:42:47','sheik','2022-02-11 11:43:04'),
 (14,'ItemCode','Local','24300.0000','1832','SAD','0','0','1','1','Moving Average','siva','2022-10-20 17:52:40',NULL,NULL);
/*!40000 ALTER TABLE `stksettings001mb` ENABLE KEYS */;


--
-- Definition of table `stktransdeliver001hb`
--

DROP TABLE IF EXISTS `stktransdeliver001hb`;
CREATE TABLE `stktransdeliver001hb` (
  `stdelId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `delName` varchar(30) NOT NULL,
  `grandTotal` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stdelId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stktransdeliver001hb`
--

/*!40000 ALTER TABLE `stktransdeliver001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stktransdeliver001hb` ENABLE KEYS */;


--
-- Definition of table `stktransdeliver001mb`
--

DROP TABLE IF EXISTS `stktransdeliver001mb`;
CREATE TABLE `stktransdeliver001mb` (
  `stdelId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `delName` varchar(30) NOT NULL,
  `grandTotal` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stdelId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stktransdeliver001mb`
--

/*!40000 ALTER TABLE `stktransdeliver001mb` DISABLE KEYS */;
INSERT INTO `stktransdeliver001mb` (`stdelId`,`title`,`status`,`delName`,`grandTotal`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (8,'SHEIK','Cancelled','HJA',78456,'sheik','2022-02-11 10:35:07','sheik','2022-02-11 10:35:32');
/*!40000 ALTER TABLE `stktransdeliver001mb` ENABLE KEYS */;


--
-- Definition of table `stktransentry001hb`
--

DROP TABLE IF EXISTS `stktransentry001hb`;
CREATE TABLE `stktransentry001hb` (
  `stentId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `purpose` varchar(50) NOT NULL,
  `stName` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stentId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stktransentry001hb`
--

/*!40000 ALTER TABLE `stktransentry001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stktransentry001hb` ENABLE KEYS */;


--
-- Definition of table `stktransentry001mb`
--

DROP TABLE IF EXISTS `stktransentry001mb`;
CREATE TABLE `stktransentry001mb` (
  `stentId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `purpose` varchar(50) NOT NULL,
  `stName` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stentId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stktransentry001mb`
--

/*!40000 ALTER TABLE `stktransentry001mb` DISABLE KEYS */;
INSERT INTO `stktransentry001mb` (`stentId`,`title`,`status`,`purpose`,`stName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (14,'Material Receipt','Notstarted','Material Transfer for Manufacture','SHEIK','sheik','2022-02-11 10:34:39','sheik','2022-02-11 10:34:49'),
 (15,'Material Receipt','Unstopped','Material Transfer','raj','siva','2022-10-20 17:38:24',NULL,NULL);
/*!40000 ALTER TABLE `stktransentry001mb` ENABLE KEYS */;


--
-- Definition of table `stktranspurecpt001hb`
--

DROP TABLE IF EXISTS `stktranspurecpt001hb`;
CREATE TABLE `stktranspurecpt001hb` (
  `stpurtId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `purtName` varchar(40) NOT NULL,
  `grandTotal` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stpurtId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stktranspurecpt001hb`
--

/*!40000 ALTER TABLE `stktranspurecpt001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stktranspurecpt001hb` ENABLE KEYS */;


--
-- Definition of table `stktranspurecpt001mb`
--

DROP TABLE IF EXISTS `stktranspurecpt001mb`;
CREATE TABLE `stktranspurecpt001mb` (
  `stpurtId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `purtName` varchar(40) NOT NULL,
  `grandTotal` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stpurtId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stktranspurecpt001mb`
--

/*!40000 ALTER TABLE `stktranspurecpt001mb` DISABLE KEYS */;
INSERT INTO `stktranspurecpt001mb` (`stpurtId`,`title`,`status`,`purtName`,`grandTotal`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (7,'AHWIK','Draft','7864',78456,'sheik','2022-02-11 10:35:47','sheik','2022-02-11 10:35:57');
/*!40000 ALTER TABLE `stktranspurecpt001mb` ENABLE KEYS */;


--
-- Definition of table `stockageing001hb`
--

DROP TABLE IF EXISTS `stockageing001hb`;
CREATE TABLE `stockageing001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemcode` varchar(30) NOT NULL,
  `itemname` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `itemgroup` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `averageage` int(30) NOT NULL,
  `earliest` tinyint(1) NOT NULL,
  `latest` tinyint(1) NOT NULL,
  `uom` varchar(30) NOT NULL,
  `actual` int(11) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `ordered` int(11) DEFAULT NULL,
  `projected` int(11) DEFAULT NULL,
  `requested` int(11) DEFAULT NULL,
  `reserved` int(11) DEFAULT NULL,
  `warehouse` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockageing001hb`
--

/*!40000 ALTER TABLE `stockageing001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockageing001hb` ENABLE KEYS */;


--
-- Definition of table `stockageing001mb`
--

DROP TABLE IF EXISTS `stockageing001mb`;
CREATE TABLE `stockageing001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemcode` varchar(30) NOT NULL,
  `itemname` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `itemgroup` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `averageage` int(30) NOT NULL,
  `earliest` tinyint(1) NOT NULL,
  `latest` tinyint(1) NOT NULL,
  `uom` varchar(30) NOT NULL,
  `actual` int(11) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `ordered` int(11) DEFAULT NULL,
  `projected` int(11) DEFAULT NULL,
  `requested` int(11) DEFAULT NULL,
  `reserved` int(11) DEFAULT NULL,
  `warehouse` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockageing001mb`
--

/*!40000 ALTER TABLE `stockageing001mb` DISABLE KEYS */;
INSERT INTO `stockageing001mb` (`id`,`itemcode`,`itemname`,`description`,`itemgroup`,`brand`,`averageage`,`earliest`,`latest`,`uom`,`actual`,`item`,`ordered`,`projected`,`requested`,`reserved`,`warehouse`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'material','shaft','rawmaetrial','billing','good',5,1,0,'nos',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','0000-00-00 00:00:00',NULL,NULL),
 (2,'table','rawmaterial','rawmatrrialbilling','table','good',7,0,0,'numbersss',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `stockageing001mb` ENABLE KEYS */;


--
-- Definition of table `stockbalance001hb`
--

DROP TABLE IF EXISTS `stockbalance001hb`;
CREATE TABLE `stockbalance001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(30) NOT NULL,
  `itemname` varchar(30) NOT NULL,
  `itemgroup` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `warehouse` varchar(30) NOT NULL,
  `stockuom` varchar(30) NOT NULL,
  `openingqty` decimal(3,1) NOT NULL,
  `openingvalue` decimal(3,1) NOT NULL,
  `inqty` decimal(3,1) NOT NULL,
  `invalue` decimal(3,1) NOT NULL,
  `outqty` decimal(3,1) NOT NULL,
  `outvalue` decimal(3,1) NOT NULL,
  `balqty` decimal(3,1) NOT NULL,
  `balvalue` decimal(3,1) NOT NULL,
  `validationrate` varchar(30) NOT NULL,
  `company` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockbalance001hb`
--

/*!40000 ALTER TABLE `stockbalance001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockbalance001hb` ENABLE KEYS */;


--
-- Definition of table `stockbalance001mb`
--

DROP TABLE IF EXISTS `stockbalance001mb`;
CREATE TABLE `stockbalance001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(30) NOT NULL,
  `itemname` varchar(30) NOT NULL,
  `itemgroup` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `warehouse` varchar(30) NOT NULL,
  `stockuom` varchar(30) NOT NULL,
  `openingqty` decimal(3,1) NOT NULL,
  `openingvalue` decimal(3,1) NOT NULL,
  `inqty` decimal(3,1) NOT NULL,
  `invalue` decimal(3,1) NOT NULL,
  `outqty` decimal(3,1) NOT NULL,
  `outvalue` decimal(3,1) NOT NULL,
  `balqty` decimal(3,1) NOT NULL,
  `balvalue` decimal(3,1) NOT NULL,
  `validationrate` varchar(30) NOT NULL,
  `company` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockbalance001mb`
--

/*!40000 ALTER TABLE `stockbalance001mb` DISABLE KEYS */;
INSERT INTO `stockbalance001mb` (`id`,`item`,`itemname`,`itemgroup`,`brand`,`description`,`warehouse`,`stockuom`,`openingqty`,`openingvalue`,`inqty`,`invalue`,`outqty`,`outvalue`,`balqty`,`balvalue`,`validationrate`,`company`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'shaft','blade','rawmaterial','nice','good materail','spl','nos','1.0','10.0','2.0','5.0','10.0','45.0','58.0','12.0','14','xyz','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `stockbalance001mb` ENABLE KEYS */;


--
-- Definition of table `stockentry001hb`
--

DROP TABLE IF EXISTS `stockentry001hb`;
CREATE TABLE `stockentry001hb` (
  `stockid` int(11) NOT NULL AUTO_INCREMENT,
  `materialrequest` varchar(30) NOT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `TransferedQty` decimal(3,1) NOT NULL,
  `Qtytotransfer` decimal(3,1) NOT NULL,
  `description` varchar(30) NOT NULL,
  `company` varchar(40) NOT NULL,
  `itemid` int(10) unsigned NOT NULL,
  `date` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stockid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockentry001hb`
--

/*!40000 ALTER TABLE `stockentry001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockentry001hb` ENABLE KEYS */;


--
-- Definition of table `stockentry001mb`
--

DROP TABLE IF EXISTS `stockentry001mb`;
CREATE TABLE `stockentry001mb` (
  `stockid` int(11) NOT NULL AUTO_INCREMENT,
  `materialrequest` varchar(30) NOT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `TransferedQty` decimal(3,1) NOT NULL,
  `Qtytotransfer` decimal(3,1) NOT NULL,
  `description` varchar(30) NOT NULL,
  `company` varchar(40) NOT NULL,
  `itemid` int(10) unsigned NOT NULL,
  `date` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stockid`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockentry001mb`
--

/*!40000 ALTER TABLE `stockentry001mb` DISABLE KEYS */;
INSERT INTO `stockentry001mb` (`stockid`,`materialrequest`,`Quantity`,`TransferedQty`,`Qtytotransfer`,`description`,`company`,`itemid`,`date`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (74,'45',1,'4.0','7.0','5','NANDALALA',4,'2022-02-14 18:30:00','sheik','2022-02-11 13:00:41','sheik','2022-02-11 13:00:52');
/*!40000 ALTER TABLE `stockentry001mb` ENABLE KEYS */;


--
-- Definition of table `stockledger001hb`
--

DROP TABLE IF EXISTS `stockledger001hb`;
CREATE TABLE `stockledger001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `item` varchar(30) NOT NULL,
  `itemname` varchar(30) NOT NULL,
  `itemgroup` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `warehouse` varchar(30) NOT NULL,
  `stockuom` varchar(30) NOT NULL,
  `qty` int(30) NOT NULL,
  `balanceqty` int(30) NOT NULL,
  `incomingrate` int(30) NOT NULL,
  `valuationrate` int(30) NOT NULL,
  `balancevalue` int(30) NOT NULL,
  `vouchertype` varchar(30) NOT NULL,
  `voucherno` int(30) NOT NULL,
  `batch` int(30) NOT NULL,
  `serialno` int(30) NOT NULL,
  `company` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockledger001hb`
--

/*!40000 ALTER TABLE `stockledger001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockledger001hb` ENABLE KEYS */;


--
-- Definition of table `stockledger001mb`
--

DROP TABLE IF EXISTS `stockledger001mb`;
CREATE TABLE `stockledger001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `item` varchar(30) NOT NULL,
  `itemname` varchar(30) NOT NULL,
  `itemgroup` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `warehouse` varchar(30) NOT NULL,
  `stockuom` varchar(30) NOT NULL,
  `qty` int(30) NOT NULL,
  `balanceqty` int(30) NOT NULL,
  `incomingrate` int(30) NOT NULL,
  `valuationrate` int(30) NOT NULL,
  `balancevalue` int(30) NOT NULL,
  `vouchertype` varchar(30) NOT NULL,
  `voucherno` int(30) NOT NULL,
  `batch` int(30) NOT NULL,
  `serialno` int(30) NOT NULL,
  `company` varchar(30) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockledger001mb`
--

/*!40000 ALTER TABLE `stockledger001mb` DISABLE KEYS */;
INSERT INTO `stockledger001mb` (`id`,`date`,`item`,`itemname`,`itemgroup`,`brand`,`description`,`warehouse`,`stockuom`,`qty`,`balanceqty`,`incomingrate`,`valuationrate`,`balancevalue`,`vouchertype`,`voucherno`,`batch`,`serialno`,`company`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'0000-00-00 00:00:00','stock','shaft','rawmaterial','good','nice','spl','nos',10,12,25,45,85,'materialtype',10,2,5,'xyz','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `stockledger001mb` ENABLE KEYS */;


--
-- Definition of table `stockprojected001hb`
--

DROP TABLE IF EXISTS `stockprojected001hb`;
CREATE TABLE `stockprojected001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actualqty` int(11) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemcode` varchar(255) DEFAULT NULL,
  `itemgroup` varchar(255) DEFAULT NULL,
  `itemname` varchar(255) DEFAULT NULL,
  `orderedqty` int(11) DEFAULT NULL,
  `plannedqty` int(11) DEFAULT NULL,
  `projectedqty` int(11) DEFAULT NULL,
  `reorderlevel` int(11) DEFAULT NULL,
  `reorderqty` int(11) DEFAULT NULL,
  `requestedqty` int(11) DEFAULT NULL,
  `reservedqty` int(11) DEFAULT NULL,
  `shortageqty` int(11) DEFAULT NULL,
  `stockuom` varchar(255) DEFAULT NULL,
  `warehouse` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockprojected001hb`
--

/*!40000 ALTER TABLE `stockprojected001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockprojected001hb` ENABLE KEYS */;


--
-- Definition of table `stockprojected001mb`
--

DROP TABLE IF EXISTS `stockprojected001mb`;
CREATE TABLE `stockprojected001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actualqty` int(11) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `itemcode` varchar(255) DEFAULT NULL,
  `itemgroup` varchar(255) DEFAULT NULL,
  `itemname` varchar(255) DEFAULT NULL,
  `orderedqty` int(11) DEFAULT NULL,
  `plannedqty` int(11) DEFAULT NULL,
  `projectedqty` int(11) DEFAULT NULL,
  `reorderlevel` int(11) DEFAULT NULL,
  `reorderqty` int(11) DEFAULT NULL,
  `requestedqty` int(11) DEFAULT NULL,
  `reservedqty` int(11) DEFAULT NULL,
  `shortageqty` int(11) DEFAULT NULL,
  `stockuom` varchar(255) DEFAULT NULL,
  `warehouse` varchar(255) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stockprojected001mb`
--

/*!40000 ALTER TABLE `stockprojected001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockprojected001mb` ENABLE KEYS */;


--
-- Definition of table `supplier001hb`
--

DROP TABLE IF EXISTS `supplier001hb`;
CREATE TABLE `supplier001hb` (
  `supId` int(11) NOT NULL AUTO_INCREMENT,
  `supName` varchar(50) NOT NULL,
  `addType` varchar(50) NOT NULL,
  `supCity` varchar(50) NOT NULL,
  `supAddress` varchar(100) NOT NULL,
  `supPhone` varchar(15) DEFAULT NULL,
  `supCountry` varchar(50) NOT NULL,
  `supState` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`supId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier001hb`
--

/*!40000 ALTER TABLE `supplier001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `supplier001hb` ENABLE KEYS */;


--
-- Definition of table `supplier001mb`
--

DROP TABLE IF EXISTS `supplier001mb`;
CREATE TABLE `supplier001mb` (
  `supId` int(11) NOT NULL AUTO_INCREMENT,
  `supName` varchar(50) NOT NULL,
  `addType` varchar(50) NOT NULL,
  `supCity` varchar(50) NOT NULL,
  `supAddress` varchar(100) NOT NULL,
  `supPhone` varchar(15) DEFAULT NULL,
  `supCountry` varchar(50) NOT NULL,
  `supState` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`supId`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier001mb`
--

/*!40000 ALTER TABLE `supplier001mb` DISABLE KEYS */;
INSERT INTO `supplier001mb` (`supId`,`supName`,`addType`,`supCity`,`supAddress`,`supPhone`,`supCountry`,`supState`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (25,'SHEIK','Billing','TRICHY','GAGGAGFG','9025769465','INDIA','TAMILNADUI','sheik','2022-02-11 12:58:52','sheik','2022-02-11 12:59:00'),
 (26,'raj','Office','tfs','errw','5353525252','gdgd','fsfsf','siva','2022-11-09 11:33:54',NULL,NULL),
 (28,'rajr','Office','trichy','rerer','5353525252','gdgd','fsfsf','siva','2022-11-09 17:34:53',NULL,NULL),
 (29,'rajr','Office','trichy','rerer','5353525252','gdgd','fsfsf','siva','2022-11-09 17:34:53',NULL,NULL),
 (30,'rajr','Office','trichy','rerer','5353525252','gdgd','fsfsf','siva','2022-11-09 17:34:53',NULL,NULL);
/*!40000 ALTER TABLE `supplier001mb` ENABLE KEYS */;


--
-- Definition of table `supptype001hb`
--

DROP TABLE IF EXISTS `supptype001hb`;
CREATE TABLE `supptype001hb` (
  `sutypeId` int(11) NOT NULL AUTO_INCREMENT,
  `supName` varchar(50) NOT NULL,
  `suType` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`sutypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supptype001hb`
--

/*!40000 ALTER TABLE `supptype001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `supptype001hb` ENABLE KEYS */;


--
-- Definition of table `supptype001mb`
--

DROP TABLE IF EXISTS `supptype001mb`;
CREATE TABLE `supptype001mb` (
  `sutypeId` int(11) NOT NULL AUTO_INCREMENT,
  `supName` varchar(50) NOT NULL,
  `suType` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`sutypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supptype001mb`
--

/*!40000 ALTER TABLE `supptype001mb` DISABLE KEYS */;
INSERT INTO `supptype001mb` (`sutypeId`,`supName`,`suType`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (7,'Eagle Hardware','Pharmaceutical','sheik','2022-02-11 05:57:59','sheik','2022-02-11 05:58:07'),
 (8,'New World Reality','Services','siva','2022-10-20 15:56:21',NULL,NULL);
/*!40000 ALTER TABLE `supptype001mb` ENABLE KEYS */;


--
-- Definition of table `supstatus001hb`
--

DROP TABLE IF EXISTS `supstatus001hb`;
CREATE TABLE `supstatus001hb` (
  `sustatusId` int(11) NOT NULL AUTO_INCREMENT,
  `supName` varchar(50) NOT NULL,
  `sustatus` varchar(50) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`sustatusId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supstatus001hb`
--

/*!40000 ALTER TABLE `supstatus001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `supstatus001hb` ENABLE KEYS */;


--
-- Definition of table `supstatus001mb`
--

DROP TABLE IF EXISTS `supstatus001mb`;
CREATE TABLE `supstatus001mb` (
  `sustatusId` int(11) NOT NULL AUTO_INCREMENT,
  `supName` varchar(50) NOT NULL,
  `sustatus` varchar(50) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`sustatusId`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supstatus001mb`
--

/*!40000 ALTER TABLE `supstatus001mb` DISABLE KEYS */;
INSERT INTO `supstatus001mb` (`sustatusId`,`supName`,`sustatus`,`phone`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (19,'Eagle Hardware','Open','9025762102','sheik','2022-02-11 05:58:22','sheik','2022-02-11 05:58:48');
/*!40000 ALTER TABLE `supstatus001mb` ENABLE KEYS */;


--
-- Definition of table `swsanalytics001hb`
--

DROP TABLE IF EXISTS `swsanalytics001hb`;
CREATE TABLE `swsanalytics001hb` (
  `swsId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `swsUOM` varchar(20) NOT NULL,
  `consAmt` decimal(12,4) DEFAULT NULL,
  `delAmt` decimal(12,4) DEFAULT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  `consQty` int(11) NOT NULL,
  `delQty` int(11) NOT NULL,
  `totalQty` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`swsId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `swsanalytics001hb`
--

/*!40000 ALTER TABLE `swsanalytics001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `swsanalytics001hb` ENABLE KEYS */;


--
-- Definition of table `swsanalytics001mb`
--

DROP TABLE IF EXISTS `swsanalytics001mb`;
CREATE TABLE `swsanalytics001mb` (
  `swsId` int(11) NOT NULL AUTO_INCREMENT,
  `itemCode` varchar(50) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `swsUOM` varchar(20) NOT NULL,
  `consAmt` decimal(12,4) DEFAULT NULL,
  `delAmt` decimal(12,4) DEFAULT NULL,
  `totalAmt` decimal(12,4) DEFAULT NULL,
  `consQty` int(11) NOT NULL,
  `delQty` int(11) NOT NULL,
  `totalQty` int(11) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`swsId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `swsanalytics001mb`
--

/*!40000 ALTER TABLE `swsanalytics001mb` DISABLE KEYS */;
INSERT INTO `swsanalytics001mb` (`swsId`,`itemCode`,`description`,`swsUOM`,`consAmt`,`delAmt`,`totalAmt`,`consQty`,`delQty`,`totalQty`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (8,'2424','GOOD','464487','123546.0000','1254988.0000','756429.0000',785674,75646,1236,'sheik','2022-02-11 06:11:37','sheik','2022-02-11 06:11:57');
/*!40000 ALTER TABLE `swsanalytics001mb` ENABLE KEYS */;


--
-- Definition of table `systemproperties001hb`
--

DROP TABLE IF EXISTS `systemproperties001hb`;
CREATE TABLE `systemproperties001hb` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(60) NOT NULL,
  `type` varchar(20) NOT NULL,
  `status` char(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `systemproperties001hb`
--

/*!40000 ALTER TABLE `systemproperties001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `systemproperties001hb` ENABLE KEYS */;


--
-- Definition of table `systemproperties001mb`
--

DROP TABLE IF EXISTS `systemproperties001mb`;
CREATE TABLE `systemproperties001mb` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(60) NOT NULL,
  `type` varchar(20) NOT NULL,
  `status` char(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=376 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `systemproperties001mb`
--

/*!40000 ALTER TABLE `systemproperties001mb` DISABLE KEYS */;
INSERT INTO `systemproperties001mb` (`ID`,`name`,`description`,`type`,`status`) VALUES 
 (1,'Login.Domain','Manufacturing','Domain','Y'),
 (2,'Login.Domain','Construction','Domain','Y'),
 (3,'Login.Domain','Buying House','Domain','Y'),
 (4,'Login.Domain','Calibration Labs','Domain','Y'),
 (5,'Login.Domain','School','Domain','Y'),
 (6,'Registration.SecurityQuestion','What was your childhood nickname ?','SecurityQuestion','Y'),
 (7,'Registration.SecurityQuestion','In what city did you meet your spouse/significant other ?','SecurityQuestion','Y'),
 (8,'Registration.SecurityQuestion','What is the name of your favorite childhood friend ?','SecurityQuestion','Y'),
 (9,'Registration.SecurityQuestion','What street did you live on in third grade ?','SecurityQuestion','Y'),
 (10,'Registration.SecurityQuestion','What is your oldest sibling\'s middle name ?','SecurityQuestion','Y'),
 (11,'Registration.SecurityQuestion','What school did you attend for sixth grade ?','SecurityQuestion','Y'),
 (12,'Item.Status','To Deliver','Status','Y'),
 (13,'Item.Status','To Bill','Status','Y'),
 (14,'Item.Status','Draft','Status','Y'),
 (15,'Item.Status','Completed','Status','Y'),
 (16,'Item.Status','Closed','Status','Y'),
 (17,'Item.Status','Cancelled','Status','Y'),
 (18,'EmpStatus.status','Active','status','Y'),
 (19,'EmpStatus.status','Inactive','status','Y'),
 (20,'EmpGender.gender','Male','gender','Y'),
 (21,'EmpGender.gender','Female','gender','Y'),
 (22,'Recruit.JobOpening','open','JobOpening','Y'),
 (23,'Recruit.JobOpening','closed','JobOpening','Y'),
 (24,'Recruit.JobApplicant','open','JobApplicant','Y'),
 (25,'Recruit.JobApplicant','replied','JobApplicant','Y'),
 (26,'Recruit.JobApplicant','rejected','JobApplicant','Y'),
 (27,'Recruit.JobApplicant','hold','JobApplicant','Y'),
 (28,'Recruit.OfferLetter','Draft','OfferLetter','Y'),
 (29,'Recruit.OfferLetter','Submitted','OfferLetter','Y'),
 (30,'Recruit.OfferLetter','Cancelled','OfferLetter','Y'),
 (31,'Recruit.OfferLetter','Queued for Saving','OfferLetter','Y'),
 (32,'Recruit.OfferLetter','Queued for Submission','OfferLetter','Y'),
 (33,'Recruit.OfferLetter','Queued for Cancellation','OfferLetter','Y'),
 (34,'Name.Prefix','Mr','Prefix','Y'),
 (35,'Name.Prefix','Mrs','Prefix','Y'),
 (36,'Name.Prefix','Ms','Prefix','Y'),
 (37,'Name.Prefix','Other','Prefix','Y'),
 (38,'Leave.leaveApp','Open','leaveApp','Y'),
 (39,'Leave.leaveApp','Approved','leaveApp','Y'),
 (40,'Leave.leaveApp','Rejected','leaveApp','Y'),
 (41,'Leave.leaveType','Sick','leaveType','Y'),
 (42,'Leave.leaveType','Casual','leaveType','Y'),
 (43,'Leave.leaveType','Vacation','leaveType','Y'),
 (44,'Leave.leaveType','Paternity','leaveType','Y'),
 (45,'Leave.leaveType','Maternity','leaveType','Y'),
 (46,'Leave.leaveType','Privilege','leaveType','Y'),
 (47,'Leave.leaveType','Compensetory','leaveType','Y'),
 (48,'Holiday.Week','Monday','Week','Y'),
 (49,'Holiday.Week','Tuesday','Week','Y'),
 (50,'Holiday.Week','Wednesday','Week','Y'),
 (51,'Holiday.Week','Thursday','Week','Y'),
 (52,'Holiday.Week','Friday','Week','Y'),
 (53,'Holiday.Week','Saturday','Week','Y'),
 (54,'Holiday.Week','Sunday','Week','Y'),
 (55,'processpr.Month','1','Month','Y'),
 (56,'processpr.Month','2','Month','Y'),
 (57,'processpr.Month','3','Month','Y'),
 (58,'processpr.Month','4','Month','Y'),
 (59,'processpr.Month','5','Month','Y'),
 (60,'processpr.Month','6','Month','Y'),
 (61,'processpr.Month','7','Month','Y'),
 (62,'processpr.Month','8','Month','Y'),
 (63,'processpr.Month','9','Month','Y'),
 (64,'processpr.Month','10','Month','Y'),
 (65,'processpr.Month','11','Month','Y'),
 (66,'processpr.Month','12','Month','Y'),
 (67,'Salary.Mode','Yes','Mode','Y'),
 (68,'Salary.Mode','No','Mode','Y'),
 (69,'Expense.Type','Food','Type','Y'),
 (70,'Expense.Type','Medical','Type','Y'),
 (71,'Expense.Type','Travel','Type','Y'),
 (72,'Expense.Type','Calls','Type','Y'),
 (73,'Expense.Type','Others','Type','Y'),
 (74,'Product.Planning','Sales Order','Planning','Y'),
 (75,'Product.Planning','Material Request','Planning','Y'),
 (76,'Product.Planning','Material Delivery','Planning','Y'),
 (77,'Itembom.status','Enabled','status','Y'),
 (78,'Itembom.status','Variant','status','Y'),
 (79,'Itembom.status','Template','status','Y'),
 (80,'Itembom.status','Disabled','status','Y'),
 (81,'Item.Group','Products','Group','Y'),
 (82,'Item.Group','Raw Materials','Group','Y'),
 (83,'Item.Group','Sub Assemblies','Group','Y'),
 (84,'Item.Group','All ItemGroups','Group','Y'),
 (85,'Manufacture.List','Sales-WPL','List','Y'),
 (86,'Manufacture.List','Supplier-WPL','List','Y'),
 (87,'Manufacture.List','Work-in Progress-WPL','List','Y'),
 (88,'Manufacture.List','Finished Goods-WPL','List','Y'),
 (89,'Manufacture.List','All Warehouses-WPL','List','Y'),
 (90,'PRMatReq.Type','Purchase','Type','Y'),
 (91,'PRMatReq.Type','Material Transfer','Type','Y'),
 (92,'PRMatReq.Type','Material Issue','Type','Y'),
 (93,'PRMatReq.Type','Manufacture','Type','Y'),
 (94,'PRSupp.Type','Asiatic Solution','Type','Y'),
 (95,'PRSupp.Type','Eagle Hardware','Type','Y'),
 (96,'PRSupp.Type','KSMerchandise','Type','Y'),
 (97,'PRSupp.Type','New World Reality','Type','Y'),
 (98,'PRSupp.Type','HomeBase','Type','Y'),
 (99,'PRSupp.Type','Scotier','Type','Y'),
 (100,'PRSupp.Type','HeliosAir','Type','Y'),
 (101,'PRRawmat.List','Yes','List','Y'),
 (102,'PRRawmat.List','No','List','Y'),
 (103,'SuAddress.Type','Billing','Type','Y'),
 (104,'SuAddress.Type','Shipping','Type','Y'),
 (105,'SuAddress.Type','Office','Type','Y'),
 (106,'SuAddress.Type','Personal','Type','Y'),
 (107,'SuAddress.Type','Plant','Type','Y'),
 (108,'SuAddress.Type','Postal','Type','Y'),
 (109,'SuAddress.Type','Shop','Type','Y'),
 (110,'SuAddress.Type','Subsidiary','Type','Y'),
 (111,'SuAddress.Type','Warehouse','Type','Y'),
 (112,'SuAddress.Type','Other','Type','Y'),
 (113,'Supplier.Type','Distributor','Type','Y'),
 (114,'Supplier.Type','Electrical','Type','Y'),
 (115,'Supplier.Type','Hardware','Type','Y'),
 (116,'Supplier.Type','Local','Type','Y'),
 (117,'Supplier.Type','Pharmaceutical','Type','Y'),
 (118,'Supplier.Type','Raw Material','Type','Y'),
 (119,'Supplier.Type','Services','Type','Y'),
 (120,'Supplier.Status','Open','Status','Y'),
 (121,'Supplier.Status','Enabled','Status','Y'),
 (122,'Supplier.Status','Passive','Status','Y'),
 (123,'Supplier.Status','Replied','Status','Y'),
 (124,'Putree.type','Supplier Type','type','Y'),
 (125,'Putree.type','Supplier','type','Y'),
 (126,'Putree.type','Item Group','type','Y'),
 (127,'Putree.type','Item','type','Y'),
 (128,'PuBase.type','Purchase Invoice','type','Y'),
 (129,'PuBase.type','Purchase Order','type','Y'),
 (130,'PuBase.type','Purchase Receipt','type','Y'),
 (131,'valqty.choose','Value','choose','Y'),
 (132,'valqty.choose','Quantity','choose','Y'),
 (133,'range.type','Daily','type','Y'),
 (134,'range.type','Monthly','type','Y'),
 (135,'range.type','Weekly','type','Y'),
 (136,'range.type','Quarterly','type','Y'),
 (137,'range.type','Half-Yearly','type','Y'),
 (138,'range.type','Yearly','type','Y'),
 (139,'crms.status','Lead','status','Y'),
 (140,'crms.status','Replied','status','Y'),
 (141,'crms.status','Open','status','Y'),
 (142,'crms.status','Opportunity','status','Y'),
 (143,'crms.status','Interested','status','Y'),
 (144,'crms.status','Converted','status','Y'),
 (145,'crms.status','Do Not Contact','status','Y'),
 (146,'crmscust.status','Open','status','Y'),
 (147,'crmscust.status','Dormant','status','Y'),
 (148,'crmscust.status','Active','status','Y'),
 (149,'crmcontact.status','Passive','status','Y'),
 (150,'crmcontact.status','Open','status','Y'),
 (151,'crmcontact.status','Replied','status','Y'),
 (152,'crmoppo.type','Sales','type','Y'),
 (153,'crmoppo.type','Maintainence','type','Y'),
 (154,'crmoppo.from','Lead','from','Y'),
 (155,'crmoppo.from','Customer','from','Y'),
 (156,'crmsoppo.status','Open','status','Y'),
 (157,'crmsoppo.status','Quotation','status','Y'),
 (158,'crmsoppo.status','Converted','status','Y'),
 (159,'crmsoppo.status','Lost','status','Y'),
 (160,'crmsoppo.status','Replied','status','Y'),
 (161,'crmsoppo.status','Closed','status','Y'),
 (162,'crmcommunics.status','Open','status','Y'),
 (163,'crmcommunics.status','Replied','status','Y'),
 (164,'crmcommunics.status','Closed','status','Y'),
 (165,'crmcommunics.status','Linked','status','Y'),
 (166,'crmcommunics.sentrec','Sent','sentrec','Y'),
 (167,'crmcommunics.sentrec','Received','sentrec','Y'),
 (168,'inactivecust.type','Sales Person','type','Y'),
 (169,'inactivecust.type','Sales Invoice','type','Y'),
 (170,'stktransent.title','Material issue','title','Y'),
 (171,'stktransent.title','Material Receipt','title','Y'),
 (172,'stktransent.title','Material Transfer','title','Y'),
 (173,'stktransent.title','Material Transfer for Manufacture','title','Y'),
 (174,'stktransent.title','Manufacture','title','Y'),
 (175,'stktransent.title','Replace','title','Y'),
 (176,'stktransent.title','Sub-Contract','title','Y'),
 (177,'stkvoucher.type','Delivery Note','type','Y'),
 (178,'stkvoucher.type','Purchase Receipt','type','Y'),
 (179,'stkvoucher.type','Stock Entry','type','Y'),
 (180,'stkvoucher.type','Sales inVoice','type','Y'),
 (181,'shipping.status','Enabled','status','Y'),
 (182,'shipping.status','Disabled','status','Y'),
 (183,'receiptdoc.type','Purchase Invoice','type','Y'),
 (184,'receiptdoc.type','Purchase Receipt','type','Y'),
 (185,'itemnaming.select','ItemCode','select','Y'),
 (186,'itemnaming.select','NamingServices','select','Y'),
 (187,'defvalue.method','FIFO','method','Y'),
 (188,'defvalue.method','Moving Average','method','Y'),
 (189,'party.type','Customer','type','Y'),
 (190,'party.type','Supplier','type','Y'),
 (191,'letterhead.list','Manager','list','Y'),
 (192,'letterhead.list','Human Resource','list','Y'),
 (193,'letterhead.list','Finance head','list','Y'),
 (194,'account.type','Cost of Goods Sold','type','Y'),
 (195,'account.type','Sales','type','Y'),
 (196,'account.type','Debtors','type','Y'),
 (197,'account.type','National Bank','type','Y'),
 (198,'account.type','Cash','type','Y'),
 (199,'account.type','Stores','type','Y'),
 (200,'account.type','Creditors','type','Y'),
 (201,'account.type','Freight and Forwarding','type','Y'),
 (202,'account.type','Changes','type','Y'),
 (203,'account.type','Stock Received','type','Y'),
 (204,'account.type','Not Billed','type','Y'),
 (205,'payment.mode','Cash','mode','Y'),
 (206,'payment.mode','Wire Transfer','mode','Y'),
 (207,'payment.mode','Check','mode','Y'),
 (208,'payment.mode','Credit Card','mode','Y'),
 (209,'payment.mode','Bank Draft','mode','Y'),
 (210,'currency.type','INR','type','Y'),
 (211,'currency.type','USD','type','Y'),
 (212,'currency.type','EUR','type','Y'),
 (213,'currency.type','JPN','type','Y'),
 (214,'payment.type','Receive','type','Y'),
 (215,'payment.type','Pay','type','Y'),
 (216,'payment.type','Internal Transfer','type','Y'),
 (217,'payreq.status','Paid','status','Y'),
 (218,'payreq.status','Initiated','status','Y'),
 (219,'payreq.status','Failed','status','Y'),
 (220,'payreq.status','Cancelled','status','Y'),
 (221,'payreq.status','Draft','status','Y'),
 (222,'journal.satus','Bank Entry','satus','Y'),
 (223,'journal.satus','Cash Entry','satus','Y'),
 (224,'journal.satus','Credit Card Entry','satus','Y'),
 (225,'journal.satus','Debit Note','satus','Y'),
 (226,'journal.satus','Credit Note','satus','Y'),
 (227,'journal.satus','Centre Entry','satus','Y'),
 (228,'journal.satus','Excise Entry','satus','Y'),
 (229,'journal.satus','Wire off Entry','satus','Y'),
 (230,'journal.satus','Opening Entry','satus','Y'),
 (231,'journal.satus','Depreciation Entry','satus','Y'),
 (232,'accounttype.name','Savings','name','Y'),
 (233,'accounttype.name','Current','name','Y'),
 (234,'company.domain','Manufacturing','domain','Y'),
 (235,'company.domain','IT','domain','Y'),
 (236,'company.domain','BPO','domain','Y'),
 (237,'chartacc.type','Standard','type','Y'),
 (238,'chartacc.type','Customized','type','Y'),
 (239,'task.status','Accepted','status','Y'),
 (240,'task.status','Approved','status','Y'),
 (241,'task.status','Assigned','status','Y'),
 (242,'task.status','AutoReject','status','Y'),
 (243,'task.status','Closed','status','Y'),
 (244,'task.status','Completed','status','Y'),
 (245,'task.status','Failed','status','Y'),
 (246,'task.status','In Planning','status','Y'),
 (247,'task.status','In Progress','status','Y'),
 (248,'task.status','Interrupted','status','Y'),
 (249,'task.status','Not Started','status','Y'),
 (250,'task.status','On hold','status','Y'),
 (251,'task.status','Open','status','Y'),
 (252,'task.status','Planned','status','Y'),
 (253,'task.status','Rejected','status','Y'),
 (254,'task.status','Unassigned','status','Y'),
 (255,'task.status','Waiting for Approval','status','Y'),
 (256,'Working','Working','task.status','Y'),
 (257,'Receivable','Receivable','type.account','Y'),
 (258,'type.account','Payable','account','Y'),
 (259,'bc.type','Bank','type','Y'),
 (260,'bc.type','Cash','type','Y'),
 (261,'month.name','January','name','Y'),
 (262,'month.name','February','name','Y'),
 (263,'month.name','March','name','Y'),
 (264,'month.name','April','name','Y'),
 (265,'month.name','May','name','Y'),
 (266,'month.name','June','name','Y'),
 (267,'month.name','July','name','Y'),
 (268,'month.name','August','name','Y'),
 (269,'month.name','September','name','Y'),
 (270,'month.name','October','name','Y'),
 (271,'month.name','November','name','Y'),
 (272,'month.name','December','name','Y'),
 (273,'attend.status','Present','status','Y'),
 (274,'attend.status','Absent','status','Y'),
 (275,'emp.holiday','Sunday','holiday','Y'),
 (276,'emp.holiday','Monday','holiday','Y'),
 (277,'emp.holiday','Tuesday','holiday','Y'),
 (278,'emp.holiday','Wednesday','holiday','Y'),
 (279,'emp.holiday','Thursday','holiday','Y'),
 (280,'emp.holiday','Friday','holiday','Y'),
 (281,'emp.holiday','Saturday','holiday','Y'),
 (282,'purchase.taxstatus','Enabled','taxstatus','Y'),
 (283,'purchase.taxstatus','Disabled','taxstatus','Y'),
 (284,'exceed.type','Warn','type','Y'),
 (285,'exceed.type','Stop','type','Y'),
 (286,'exceed.type','Ignore','type','Y'),
 (287,'ProdOrder.status','Draft','status','Y'),
 (288,'ProdOrder.status','Notstarted','status','Y'),
 (289,'ProdOrder.status','Submitted','status','Y'),
 (290,'ProdOrder.status','Stopped','status','Y'),
 (291,'ProdOrder.status','Unstopped','status','Y'),
 (292,'ProdOrder.status','In-Process','status','Y'),
 (293,'ProdOrder.status','Completed','status','Y'),
 (294,'ProdOrder.status','Cancelled','status','Y'),
 (295,'Dummy.status','Dummy1','dummy','Y'),
 (296,'Dummy.status','Dummy2','dummy','Y'),
 (297,'Dummy.status','Dummy3','dummy','Y'),
 (298,'Year.status','2020','year','Y'),
 (299,'Year.status','2021','year','Y'),
 (300,'Year.status','2022','year','Y'),
 (301,'Year.status','2023','year','Y'),
 (302,'Year.status','2024','year','Y'),
 (303,'Year.status','2025','year','Y'),
 (304,'StartYear.status','2021','startyear','Y'),
 (305,'StartYear.status','2022','startyear','Y'),
 (306,'StartYear.status','2023','startyear','Y'),
 (307,'StartYear.status','2024','startyear','Y'),
 (308,'StartYear.status','2025','startyear','Y'),
 (309,'StartYear.status','2026','startyear','Y'),
 (310,'StartYear.status','2027','startyear','Y'),
 (311,'StartYear.status','2028','startyear','Y'),
 (312,'StartYear.status','2029','startyear','Y'),
 (313,'StartYear.status','2030','startyear','Y'),
 (314,'StartYear.status','2031','startyear','Y'),
 (315,'StartYear.status','2032','startyear','Y'),
 (316,'StartYear.status','2033','startyear','Y'),
 (317,'StartYear.status','2034','startyear','Y'),
 (318,'StartYear.status','2035','startyear','Y'),
 (319,'StartYear.status','2036','startyear','Y'),
 (320,'StartYear.status','2037','startyear','Y'),
 (321,'StartYear.status','2038','startyear','Y'),
 (322,'StartYear.status','2039','startyear','Y'),
 (323,'StartYear.status','2040','startyear','Y'),
 (324,'EndYear.status','2021','endyear','Y'),
 (325,'EndYear.status','2022','endyear','Y'),
 (326,'EndYear.status','2023','endyear','Y'),
 (327,'EndYear.status','2024','endyear','Y'),
 (328,'EndYear.status','2025','endyear','Y'),
 (329,'EndYear.status','2026','endyear','Y'),
 (330,'EndYear.status','2027','endyear','Y'),
 (331,'EndYear.status','2028','endyear','Y'),
 (332,'EndYear.status','2029','endyear','Y'),
 (333,'EndYear.status','2030','endyear','Y'),
 (334,'EndYear.status','2031','endyear','Y'),
 (335,'EndYear.status','2032','endyear','Y'),
 (336,'EndYear.status','2033','endyear','Y'),
 (337,'EndYear.status','2034','endyear','Y'),
 (338,'EndYear.status','2035','endyear','Y'),
 (339,'EndYear.status','2036','endyear','Y'),
 (340,'EndYear.status','2037','endyear','Y'),
 (341,'EndYear.status','2038','endyear','Y'),
 (342,'EndYear.status','2039','endyear','Y'),
 (343,'EndYear.status','2040','endyear','Y'),
 (344,'Register.status','In Progress','register','Y'),
 (345,'Register.status','Pending','register','Y'),
 (346,'Register.status','Cancel','register','Y'),
 (347,'Register.status','Authorization','register','Y'),
 (348,'Register.status','New','register','Y'),
 (349,'Civil.Name','ECE','Name','Y'),
 (350,'Civil.Name','EEE','Name','Y'),
 (351,'Civil.Name','MECH','Name','Y'),
 (352,'Auto.Name','Hyundai','Name','Y'),
 (353,'Auto.Name','Suzuki','Name','Y'),
 (354,'Auto.Name','Toyato','Name','Y'),
 (355,'Auto.Name','BMW','Name','Y'),
 (356,'Book.Name','Drama','Name','Y'),
 (357,'Book.Name','Poetry','Name','Y'),
 (358,'Book.Name','Story','Name','Y'),
 (359,'Book.Name','Easy','Name','Y'),
 (360,'Novels.Name','Mysteries','Name','Y'),
 (361,'Novels.Name','Thrillers','Name','Y'),
 (362,'Novels.Name','Science Fiction','Name','Y'),
 (363,'Novels.Name','Fantasy','Name','Y'),
 (364,'Novels.Name','Fantasy','Name','Y'),
 (365,'Novels.Name','Thrillers','Name','Y'),
 (366,'Novels.Name','Fantasy','Name','Y'),
 (367,'Batch.Name','2019-20','Name','Y'),
 (368,'Batch.Name','2020-21','Name','Y'),
 (369,'Batch.Name','2021-22','Name','Y'),
 (370,'Batch.Name','2022-23','Name','Y'),
 (371,'Author.Name','William Shakespeare','Name','Y'),
 (372,'Author.Name','Henry James','Name','Y'),
 (373,'Author.Name','Jane Austen','Name','Y'),
 (374,'Author.Name','Franz Kafka','Name','Y'),
 (375,'Author.Name','Franz Kafka','Name','Y');
/*!40000 ALTER TABLE `systemproperties001mb` ENABLE KEYS */;


--
-- Definition of table `task001hb`
--

DROP TABLE IF EXISTS `task001hb`;
CREATE TABLE `task001hb` (
  `taskid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `taskdescription` varchar(45) NOT NULL,
  `AssignTo` varchar(45) NOT NULL,
  `AssignBy` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `starton` datetime NOT NULL,
  `endon` datetime NOT NULL,
  `projectname` varchar(50) DEFAULT NULL,
  `projectid` int(10) unsigned NOT NULL,
  `duration` time DEFAULT NULL,
  `allday` tinyint(1) NOT NULL,
  `sendanemail` tinyint(1) NOT NULL,
  `repeatthisevent` tinyint(1) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`taskid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task001hb`
--

/*!40000 ALTER TABLE `task001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `task001hb` ENABLE KEYS */;


--
-- Definition of table `task001mb`
--

DROP TABLE IF EXISTS `task001mb`;
CREATE TABLE `task001mb` (
  `taskid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `taskdescription` varchar(45) NOT NULL,
  `AssignTo` varchar(45) NOT NULL,
  `AssignBy` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `starton` datetime NOT NULL,
  `endon` datetime NOT NULL,
  `projectname` varchar(50) DEFAULT NULL,
  `projectid` int(10) unsigned NOT NULL,
  `duration` time DEFAULT NULL,
  `allday` tinyint(1) NOT NULL,
  `sendanemail` tinyint(1) NOT NULL,
  `repeatthisevent` tinyint(1) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`taskid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task001mb`
--

/*!40000 ALTER TABLE `task001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `task001mb` ENABLE KEYS */;


--
-- Definition of table `taxrule001hb`
--

DROP TABLE IF EXISTS `taxrule001hb`;
CREATE TABLE `taxrule001hb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `billingcity` varchar(255) DEFAULT NULL,
  `billingcountry` varchar(255) DEFAULT NULL,
  `billingstate` varchar(255) DEFAULT NULL,
  `customer` varchar(255) DEFAULT NULL,
  `shippingcity` varchar(255) DEFAULT NULL,
  `shippingcountry` varchar(255) DEFAULT NULL,
  `shippingstate` varchar(255) DEFAULT NULL,
  `taxtemplate` varchar(255) DEFAULT NULL,
  `taxtype` varchar(255) DEFAULT NULL,
  `fromdate` datetime DEFAULT NULL,
  `todate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `taxrule001hb`
--

/*!40000 ALTER TABLE `taxrule001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `taxrule001hb` ENABLE KEYS */;


--
-- Definition of table `taxrule001mb`
--

DROP TABLE IF EXISTS `taxrule001mb`;
CREATE TABLE `taxrule001mb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `billingcity` varchar(255) DEFAULT NULL,
  `billingcountry` varchar(255) DEFAULT NULL,
  `billingstate` varchar(255) DEFAULT NULL,
  `customer` varchar(255) DEFAULT NULL,
  `shippingcity` varchar(255) DEFAULT NULL,
  `shippingcountry` varchar(255) DEFAULT NULL,
  `shippingstate` varchar(255) DEFAULT NULL,
  `taxtemplate` varchar(255) DEFAULT NULL,
  `taxtype` varchar(255) DEFAULT NULL,
  `fromdate` datetime DEFAULT NULL,
  `todate` datetime DEFAULT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `taxrule001mb`
--

/*!40000 ALTER TABLE `taxrule001mb` DISABLE KEYS */;
INSERT INTO `taxrule001mb` (`id`,`billingcity`,`billingcountry`,`billingstate`,`customer`,`shippingcity`,`shippingcountry`,`shippingstate`,`taxtemplate`,`taxtype`,`fromdate`,`todate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (16,'CHENNAI','INDIA','NORTH','Dummy1','TRICHY','INDIA','SOUTH','DAD','SHEIK','2022-02-21 18:30:00','2022-02-25 18:30:00','sheik','2022-02-11 04:27:12','sheik','2022-02-11 04:27:28');
/*!40000 ALTER TABLE `taxrule001mb` ENABLE KEYS */;


--
-- Definition of table `termscondition001hb`
--

DROP TABLE IF EXISTS `termscondition001hb`;
CREATE TABLE `termscondition001hb` (
  `tcId` int(11) NOT NULL AUTO_INCREMENT,
  `tcName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `terms` varchar(200) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`tcId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `termscondition001hb`
--

/*!40000 ALTER TABLE `termscondition001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `termscondition001hb` ENABLE KEYS */;


--
-- Definition of table `termscondition001mb`
--

DROP TABLE IF EXISTS `termscondition001mb`;
CREATE TABLE `termscondition001mb` (
  `tcId` int(11) NOT NULL AUTO_INCREMENT,
  `tcName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `terms` varchar(200) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`tcId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `termscondition001mb`
--

/*!40000 ALTER TABLE `termscondition001mb` DISABLE KEYS */;
INSERT INTO `termscondition001mb` (`tcId`,`tcName`,`status`,`terms`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,'TC-001','Enabled','Account is Secured and Good enough to hold','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `termscondition001mb` ENABLE KEYS */;


--
-- Definition of table `territory001hb`
--

DROP TABLE IF EXISTS `territory001hb`;
CREATE TABLE `territory001hb` (
  `terId` int(11) NOT NULL AUTO_INCREMENT,
  `terName` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`terId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `territory001hb`
--

/*!40000 ALTER TABLE `territory001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `territory001hb` ENABLE KEYS */;


--
-- Definition of table `territory001mb`
--

DROP TABLE IF EXISTS `territory001mb`;
CREATE TABLE `territory001mb` (
  `terId` int(11) NOT NULL AUTO_INCREMENT,
  `terName` varchar(50) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`terId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `territory001mb`
--

/*!40000 ALTER TABLE `territory001mb` DISABLE KEYS */;
INSERT INTO `territory001mb` (`terId`,`terName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (11,'SHEIK MD','sheik','2022-02-11 10:15:28','sheik','2022-02-11 10:15:36');
/*!40000 ALTER TABLE `territory001mb` ENABLE KEYS */;


--
-- Definition of table `testcase001hb`
--

DROP TABLE IF EXISTS `testcase001hb`;
CREATE TABLE `testcase001hb` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ASSIGNTO` varchar(255) NOT NULL,
  `AUTOMATED` varchar(255) NOT NULL,
  `DATEUPDATED` datetime NOT NULL,
  `EXECTYPE` varchar(255) NOT NULL,
  `FOLDERNAME` varchar(255) NOT NULL,
  `LSTRNBY` varchar(255) NOT NULL,
  `LSTRNDATE` datetime NOT NULL,
  `LSTRNRELEASE` varchar(255) NOT NULL,
  `LSTRNSTATUS` varchar(255) NOT NULL,
  `LSTRNTESTSET` varchar(255) NOT NULL,
  `ORIGINALID` varchar(255) NOT NULL,
  `OWNER` varchar(255) NOT NULL,
  `PRIORITY` varchar(255) DEFAULT NULL,
  `REVIEWED` varchar(255) NOT NULL,
  `RNBYHOST` varchar(255) NOT NULL,
  `RUNTIME` varchar(255) NOT NULL,
  `STATUS` varchar(255) NOT NULL,
  `TESTTYPE` varchar(255) NOT NULL,
  `TITLE` varchar(255) NOT NULL,
  `VERSION` varchar(255) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testcase001hb`
--

/*!40000 ALTER TABLE `testcase001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `testcase001hb` ENABLE KEYS */;


--
-- Definition of table `testcase001mb`
--

DROP TABLE IF EXISTS `testcase001mb`;
CREATE TABLE `testcase001mb` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ASSIGNTO` varchar(255) NOT NULL,
  `AUTOMATED` varchar(255) NOT NULL,
  `DATEUPDATED` datetime NOT NULL,
  `EXECTYPE` varchar(255) NOT NULL,
  `FOLDERNAME` varchar(255) NOT NULL,
  `LSTRNBY` varchar(255) NOT NULL,
  `LSTRNDATE` datetime NOT NULL,
  `LSTRNRELEASE` varchar(255) NOT NULL,
  `LSTRNSTATUS` varchar(255) NOT NULL,
  `LSTRNTESTSET` varchar(255) NOT NULL,
  `ORIGINALID` varchar(255) NOT NULL,
  `OWNER` varchar(255) NOT NULL,
  `PRIORITY` varchar(255) DEFAULT NULL,
  `REVIEWED` varchar(255) NOT NULL,
  `RNBYHOST` varchar(255) NOT NULL,
  `RUNTIME` varchar(255) NOT NULL,
  `STATUS` varchar(255) NOT NULL,
  `TESTTYPE` varchar(255) NOT NULL,
  `TITLE` varchar(255) NOT NULL,
  `VERSION` varchar(255) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testcase001mb`
--

/*!40000 ALTER TABLE `testcase001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `testcase001mb` ENABLE KEYS */;


--
-- Definition of table `treenode001hb`
--

DROP TABLE IF EXISTS `treenode001hb`;
CREATE TABLE `treenode001hb` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ISPARENT` varchar(255) NOT NULL,
  `PID` varchar(255) NOT NULL,
  `PARENTNAME` varchar(255) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `treenode001hb`
--

/*!40000 ALTER TABLE `treenode001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `treenode001hb` ENABLE KEYS */;


--
-- Definition of table `treenode001mb`
--

DROP TABLE IF EXISTS `treenode001mb`;
CREATE TABLE `treenode001mb` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ISPARENT` varchar(255) NOT NULL,
  `PID` varchar(255) NOT NULL,
  `PARENTNAME` varchar(255) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `treenode001mb`
--

/*!40000 ALTER TABLE `treenode001mb` DISABLE KEYS */;
/*!40000 ALTER TABLE `treenode001mb` ENABLE KEYS */;


--
-- Definition of table `trialbalance001hb`
--

DROP TABLE IF EXISTS `trialbalance001hb`;
CREATE TABLE `trialbalance001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(45) NOT NULL,
  `openingcr` int(10) unsigned NOT NULL,
  `openingdr` int(10) unsigned NOT NULL,
  `closingcr` int(10) unsigned NOT NULL,
  `closingdr` int(10) unsigned NOT NULL,
  `credit` int(10) unsigned NOT NULL,
  `debit` int(10) unsigned NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `trialbalance001hb`
--

/*!40000 ALTER TABLE `trialbalance001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `trialbalance001hb` ENABLE KEYS */;


--
-- Definition of table `trialbalance001mb`
--

DROP TABLE IF EXISTS `trialbalance001mb`;
CREATE TABLE `trialbalance001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(45) NOT NULL,
  `openingcr` int(10) unsigned NOT NULL,
  `openingdr` int(10) unsigned NOT NULL,
  `closingcr` int(10) unsigned NOT NULL,
  `closingdr` int(10) unsigned NOT NULL,
  `credit` int(10) unsigned NOT NULL,
  `debit` int(10) unsigned NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `trialbalance001mb`
--

/*!40000 ALTER TABLE `trialbalance001mb` DISABLE KEYS */;
INSERT INTO `trialbalance001mb` (`id`,`account`,`openingcr`,`openingdr`,`closingcr`,`closingdr`,`credit`,`debit`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (12,'897987684',3232,45465,45454,64654,132121545,87987,'latha','2022-02-10 00:58:40','latha','2022-02-10 00:58:53');
/*!40000 ALTER TABLE `trialbalance001mb` ENABLE KEYS */;


--
-- Definition of table `unitofmeasure001hb`
--

DROP TABLE IF EXISTS `unitofmeasure001hb`;
CREATE TABLE `unitofmeasure001hb` (
  `unitId` int(11) NOT NULL AUTO_INCREMENT,
  `unitName` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`unitId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `unitofmeasure001hb`
--

/*!40000 ALTER TABLE `unitofmeasure001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `unitofmeasure001hb` ENABLE KEYS */;


--
-- Definition of table `unitofmeasure001mb`
--

DROP TABLE IF EXISTS `unitofmeasure001mb`;
CREATE TABLE `unitofmeasure001mb` (
  `unitId` int(11) NOT NULL AUTO_INCREMENT,
  `unitName` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`unitId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `unitofmeasure001mb`
--

/*!40000 ALTER TABLE `unitofmeasure001mb` DISABLE KEYS */;
INSERT INTO `unitofmeasure001mb` (`unitId`,`unitName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (11,'SHEIK MD','sheik','2022-02-11 11:43:52','sheik','2022-02-11 11:44:07');
/*!40000 ALTER TABLE `unitofmeasure001mb` ENABLE KEYS */;


--
-- Definition of table `updatebank001hb`
--

DROP TABLE IF EXISTS `updatebank001hb`;
CREATE TABLE `updatebank001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bankaccount` varchar(45) NOT NULL,
  `customername` varchar(50) NOT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `chqNumber` varchar(50) DEFAULT NULL,
  `fromdate` datetime NOT NULL,
  `todate` datetime NOT NULL,
  `clearanceDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `updatebank001hb`
--

/*!40000 ALTER TABLE `updatebank001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `updatebank001hb` ENABLE KEYS */;


--
-- Definition of table `updatebank001mb`
--

DROP TABLE IF EXISTS `updatebank001mb`;
CREATE TABLE `updatebank001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bankaccount` varchar(45) NOT NULL,
  `customername` varchar(50) NOT NULL,
  `amount` decimal(12,4) DEFAULT NULL,
  `chqNumber` varchar(50) DEFAULT NULL,
  `fromdate` datetime NOT NULL,
  `todate` datetime NOT NULL,
  `clearanceDate` datetime NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `updatebank001mb`
--

/*!40000 ALTER TABLE `updatebank001mb` DISABLE KEYS */;
INSERT INTO `updatebank001mb` (`id`,`bankaccount`,`customername`,`amount`,`chqNumber`,`fromdate`,`todate`,`clearanceDate`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (11,'454545454534135','Dummy1','2000.0000','45644','2022-02-14 18:30:00','2022-02-17 18:30:00','2022-02-25 18:30:00','sheik','2022-02-10 16:07:54','sheik','2022-02-10 16:08:08');
/*!40000 ALTER TABLE `updatebank001mb` ENABLE KEYS */;


--
-- Definition of table `uploadtemplate001hb`
--

DROP TABLE IF EXISTS `uploadtemplate001hb`;
CREATE TABLE `uploadtemplate001hb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` blob NOT NULL,
  `filename` varchar(45) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `uploadtemplate001hb`
--

/*!40000 ALTER TABLE `uploadtemplate001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `uploadtemplate001hb` ENABLE KEYS */;


--
-- Definition of table `uploadtemplate001mb`
--

DROP TABLE IF EXISTS `uploadtemplate001mb`;
CREATE TABLE `uploadtemplate001mb` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` blob NOT NULL,
  `filename` varchar(45) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `uploadtemplate001mb`
--

/*!40000 ALTER TABLE `uploadtemplate001mb` DISABLE KEYS */;
INSERT INTO `uploadtemplate001mb` (`id`,`content`,`filename`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (1,0x504B03041400080808003C866A4900000000000000000000000011000000646F6350726F70732F636F72652E786D6CAD915D4BC3301486EFFB2B42EEDBD36C3834B41DA20C04C581958977213DB6C5E68324DAF9EFCDBA5951BCF4F2E47DDE87C349B1DEAB81BCA3F3BDD12565594E096A699A5EB7257DAC37E9395D57495248E370EB8C45177AF424B6B42F691782E5005E76A884CF62AC63F2629C12218EAE052BE4AB68111679BE02854134220838D8523BEBE8D1C7A5FD77652367A57D73C3246824E0800A75F0C03206DF6C40A7FC9F852999C9BDEF676A1CC76C5C4E5CDC88C1D3DDEDC3B47CDA6B1F849648AB8490E264E7D2A108D890E8E0E1C36249BF92DDF2EABADED06A91B355CA58CAF29A31CE2EF8D9EAB9805FFD93F3381A575DC6B37448B6F73707747E4E0AF8F97555F209504B0708EBC3DE5304010000F4010000504B03041400080808003C866A490000000000000000000000000B0000005F72656C732F2E72656C73AD92C14EC3300C86EF7D8A28F7D5DD9010424D774148BB4D683C4048DC366A13478907E5ED090704430C76E018E7F7E74FB2DBEDE267F18C293B0A4AAEEB460A0C86AC0B83928F87FBD58DDC7655D53EE0ACB964F2E86216A529642547E6780B90CD885EE79A2286F2D353F29ACB330D10B599F480B0699A6B485F19B2AB8438C18A9D5532EDEC5A8AC36BC44BF0D4F7CEE01D99A3C7C03F4CF99628649D06642597195E284D4F44535DA012CEEA6CFE530717C660D1AE622AFD891DE64F274B665FCA19748C7F485D5D2E757E05E091B5D5ACC150C2DF95DE131F4E2D9C5C4357BD01504B070857285E23E300000046020000504B03041400080808003C866A49000000000000000000000000130000005B436F6E74656E745F54797065735D2E786D6CAD93CB4EC3301045F7F90ACB5B14BB6581104AD2058F2554A27C80B1278D55BF64BBA5FD7B2629E5255A8AE8CAB2E6DE7B6E467135595B43561093F6AEA66336A2049CF44ABB794D9F6677E5259D344551CD36011241B14B35ED720E579C27D9811589F9000E27AD8F5664BCC6390F422EC41CF8F96874C1A577195C2E739F419B8290EA065AB13499DCAE71B26547308992EBADB6C7D5548460B41419E77CE5D43750F90661E81C34A9D3219DA180F27D907EB89FF1617DC09544AD804C45CCF7C2A2902B2FA7D187C4D1C20E07FD50D6B7AD9680194B8B16067D2705AA0C1809316BF8DCFC205EFA087FE7EF96D5BB8F87AE0D4F9D88A01E73C45F22FDFBBB53882054EA00B235EC4BF61155F2C6C0C93B0CA1BFC35F7C5C3C7BBF38F90AF0645668775C85419FF8708C4FDCE53D7F57A5E2C3BB6F8A57504B070825E008CE3801000028040000504B03041400080808003C866A4900000000000000000000000010000000646F6350726F70732F6170702E786D6C4D8EC10AC2301044EF82FF10726FB77A109134A52082277BD00F08E9D6069A4D4856E9E79B937A9C19E6F154B7FA45BC316517A895BBBA9102C986D1D1B3958FFBA53ACA4E6F376A4821626287599407E556CECCF10490ED8CDEE4BACC549629246FB8C4F484304DCEE239D8974762D837CD017065A411C72A7E8152AB3EC6C559C34542F7D114A4186E5705FFBD829F83FE00504B0708366E832193000000B8000000504B03041400080808003C866A4900000000000000000000000014000000786C2F736861726564537472696E67732E786D6C7D92C14E03211086EF26BEC386BB65DB831AC3D283894FA00F40D96977121828336BECDB4BA3B1C9D27A9CEF2333C30F66FB1543F7098531D1A0D6AB5E75403E8D4887417DBCBF3D3CABADBDBF33CCD2F93493D4434FAA9B098F33BC5E406D433CA84924BF68CD7E82E87895325035FB54A2935A9683E65CC08D3C01480C7AD3F78F3A3A24650DA3356271345AACD1E7EA87F899254528B70DB908B7DCA1A4392FA51BC702CC0109D6FFB84DD314E5B4642C4E9AE939551C6A8EED5EE7CC4AD3056B2E185D39FD8E5FFA3D16966BF70CEE3ACF53A206C6B4C30034C71D94A5AB0F86A1CDF86F319F489C978BD7F54FD86F504B0708BAF98E31F100000041020000504B03041400080808003C866A490000000000000000000000000D000000786C2F7374796C65732E786D6CAD544D6FD43010BD23F11F2CDFA9B3A1A0AA4A5241D5453DB448EC22B87A6327B1F047647BAB0DBF9EB19D6C7657F4838A4B3C7E79EFCD78324E71B553123D70EB84D1255E9C6518715D1B26745BE2EFEBE5BB0B7C55BD7D53383F48BEEA38F70814DA95B8F3BEBF24C4D51D57D49D999E6B78D318ABA887AD6D89EB2DA7CC05919224CFB28F4451A17155E8AD5A2AEF506DB6DA9738C3A42A1AA36724C709A80AF71B3D5009A585DA80561B692C129AF11D6725BE0898A68A27D63595626345F4A34AC821C1790062A5234F096D6C0049CA929EB3CFFAF6EE6685EE6F7EA06F5FEF3EDD47F95448960AD9A4ADB75BFE585DA3795C1C241152EE4F788E1350153DF59E5BBD840D1AE3F5D0F3126BA379B289BC67D88CDA5F5F2C1D9E5200D45E1F179AC7DE9023D2CB123A2305C3FF66191768C5C65806433735E3039EA0AA90BCF120B7A2EDC2EA4D1F9A6DBC370A0226686B349521C1A498D740427154E1C374306A7FA381E329E785CA58D329EBF576E1A4A7A4FF94620CA0D335977215583F9B7DBB17D0EE5D83D22DBC65E102A230A35308DF680C934DDA04FF43B7E47D609BBFCA16ED9ABDFF63EAC5AC7E7FA83E9FD588F6BD1CC2B08D7732019F23F7085A9A50EC746FC9780888E67F5CF507504B0708E92B0617D001000018050000504B03041400080808003C866A490000000000000000000000000F000000786C2F776F726B626F6F6B2E786D6C8D8EC14EC3300C86EF48BC43E43B4B0A0841D5740710D26E1C0AF7AC71D7684D5CD961E3F1693B153872B27EF9F3E7BFDA7EC5419D902550B2506C0C284C2DF9900E16DE9BD79B47D8D6D757D599F8B8273AAA894F62A1CF792CB596B6C7E8644323A669D3114797A7C8072D23A3F3D223E638E85B631E747421C1C550F27F1CD475A1C5176A3F23A67C91300E2E4F6DA50FA340FDD3EC8D9577198B27736FA1738320E8BA9A371F01CFF20BCE51B9368713366E6FC1CC9CFE032E9DD7A9928B68E1990662D5A064505C066F8177FE0ED4C2ECA6582C96F554AFCFEA6F504B0708E4105EEADD00000062010000504B03041400080808003C866A490000000000000000000000001A000000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73AD91C14EC3300C40EFFD8AC8779A769310424D774148BBB2F10151EA36D5DA24B20DDBFE9E8004AC12080E3B59B6E3E797A4D99CE649BD22F1188381BAAC406170B11BC360E079FF7873079BB6289A279CACE433ECC7C42A0F0536E045D2BDD6EC3CCE96CB9830E44E1F69B692531A74B2EE6007D4ABAABAD574C980B6506A8155DBCE006DBB1AD4FE9CF03FF8D8F7A3C387E85E660CF2C316CDDE12763BA17C21CE604B038A8145B9CC54D0BFFAACAEEA23E7092F453EF23F0CD6D73438463AB047946F89AFD2FB7BE5507FFA347AF1EF6DF106504B0708F0CE5886D400000030020000504B03041400080808003C866A4900000000000000000000000018000000786C2F776F726B7368656574732F7368656574312E786D6CAD96CB729B301486F79DE93B68B42F485C4507C8B44DDD246DDAF4BEC646364C007924D9E4F12B301773D9C0746310FECEAFA3C3AF23FC9B973C0367CA45CA8A00620D41408B1D8BD3E210C0DFBF366F08BC095FBFF24BC69F4542A9042AA010014CA43CBED575B14B681E098D1D69A1FED9339E47520DF94117474EA3B80ECA33DD40C8D1F3282D60E8C7694E8B6A46C0E93E80EF30D443BF06FFA4B41457F7A09A77CBD87335B88F03A8F293D1F627CDE84E523596FC44AB687D12BEA95379E220A6FBE894C91FACBCA3E921916A99B65AA70ADAB14CD4BF204FABD54390472FF5B54C639904D0D06CDB72886B43B03B09C9F2BF97E7F5AC604B85DCA4B24FA253321A25A353C248B390632C15321B21B317329590615AE6E2A4AC46CBBAD62296EBD8CBF3B21B2DBBD7C29A8D4C6FC51A9D46CBF90F5A6EA3E5765AA6E639C85B5E2DD228914EC95A5B2CAF91F23A294F236B568751EB50D449B99A8D57E4843BB3F76E57DB8210C7C5CBFD8E5BC363E36A8D8818C8C4CB536B4D8F7BD713B511914B5688B5AEC7BDED1D0D63D35823D6DA1EDBC3FDB8A2FEADEBB173F52AB1EBADE836B8753D76AFDFE592CEA55F5A61DD386F2319853E6725E0552F54135537AA49031520201097A7E710F9FAB90A6D88F753020F890F53C21812B753C21C121FA78435243653C21E129FA6843324EEA6843B24EEA70419120F53C21B129F672A362AEA97196454D5C7196454D6AF33C8A8AEDF669051619F66905165BFCF207D697565AAF6A8BEB8EC181DE863C40F6921C09649E55375C46B956BF78C49CAAB91EA0289FA90E80619DDCB9A82805FCEF3FA5EB263135BF9B9FB5E09FF01504B07088849CD9261020000E3080000504B010214001400080808003C866A49EBC3DE5304010000F4010000110000000000000000000000000000000000646F6350726F70732F636F72652E786D6C504B010214001400080808003C866A4957285E23E3000000460200000B00000000000000000000000000430100005F72656C732F2E72656C73504B010214001400080808003C866A4925E008CE380100002804000013000000000000000000000000005F0200005B436F6E74656E745F54797065735D2E786D6C504B010214001400080808003C866A49366E832193000000B80000001000000000000000000000000000D8030000646F6350726F70732F6170702E786D6C504B010214001400080808003C866A49BAF98E31F1000000410200001400000000000000000000000000A9040000786C2F736861726564537472696E67732E786D6C504B010214001400080808003C866A49E92B0617D0010000180500000D00000000000000000000000000DC050000786C2F7374796C65732E786D6C504B010214001400080808003C866A49E4105EEADD000000620100000F00000000000000000000000000E7070000786C2F776F726B626F6F6B2E786D6C504B010214001400080808003C866A49F0CE5886D4000000300200001A0000000000000000000000000001090000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73504B010214001400080808003C866A498849CD9261020000E308000018000000000000000000000000001D0A0000786C2F776F726B7368656574732F7368656574312E786D6C504B050600000000090009003F020000C40C00000000,'customerdetails001mb.xls','','0000-00-00 00:00:00',NULL,NULL),
 (2,0x504B03041400080808003C866A4900000000000000000000000011000000646F6350726F70732F636F72652E786D6CAD915D4BC3301486EFFB2B42EEDBD36C3834B41DA20C04C581958977213DB6C5E68324DAF9EFCDBA5951BCF4F2E47DDE87C349B1DEAB81BCA3F3BDD12565594E096A699A5EB7257DAC37E9395D57495248E370EB8C45177AF424B6B42F691782E5005E76A884CF62AC63F2629C12218EAE052BE4AB68111679BE02854134220838D8523BEBE8D1C7A5FD77652367A57D73C3246824E0800A75F0C03206DF6C40A7FC9F852999C9BDEF676A1CC76C5C4E5CDC88C1D3DDEDC3B47CDA6B1F849648AB8490E264E7D2A108D890E8E0E1C36249BF92DDF2EABADED06A91B355CA58CAF29A31CE2EF8D9EAB9805FFD93F3381A575DC6B37448B6F73707747E4E0AF8F97555F209504B0708EBC3DE5304010000F4010000504B03041400080808003C866A490000000000000000000000000B0000005F72656C732F2E72656C73AD92C14EC3300C86EF7D8A28F7D5DD9010424D774148BB4D683C4048DC366A13478907E5ED090704430C76E018E7F7E74FB2DBEDE267F18C293B0A4AAEEB460A0C86AC0B83928F87FBD58DDC7655D53EE0ACB964F2E86216A529642547E6780B90CD885EE79A2286F2D353F29ACB330D10B599F480B0699A6B485F19B2AB8438C18A9D5532EDEC5A8AC36BC44BF0D4F7CEE01D99A3C7C03F4CF99628649D06642597195E284D4F44535DA012CEEA6CFE530717C660D1AE622AFD891DE64F274B665FCA19748C7F485D5D2E757E05E091B5D5ACC150C2DF95DE131F4E2D9C5C4357BD01504B070857285E23E300000046020000504B03041400080808003C866A49000000000000000000000000130000005B436F6E74656E745F54797065735D2E786D6CAD93CB4EC3301045F7F90ACB5B14BB6581104AD2058F2554A27C80B1278D55BF64BBA5FD7B2629E5255A8AE8CAB2E6DE7B6E467135595B43561093F6AEA66336A2049CF44ABB794D9F6677E5259D344551CD36011241B14B35ED720E579C27D9811589F9000E27AD8F5664BCC6390F422EC41CF8F96874C1A577195C2E739F419B8290EA065AB13499DCAE71B26547308992EBADB6C7D5548460B41419E77CE5D43750F90661E81C34A9D3219DA180F27D907EB89FF1617DC09544AD804C45CCF7C2A2902B2FA7D187C4D1C20E07FD50D6B7AD9680194B8B16067D2705AA0C1809316BF8DCFC205EFA087FE7EF96D5BB8F87AE0D4F9D88A01E73C45F22FDFBBB53882054EA00B235EC4BF61155F2C6C0C93B0CA1BFC35F7C5C3C7BBF38F90AF0645668775C85419FF8708C4FDCE53D7F57A5E2C3BB6F8A57504B070825E008CE3801000028040000504B03041400080808003C866A4900000000000000000000000010000000646F6350726F70732F6170702E786D6C4D8EC10AC2301044EF82FF10726FB77A109134A52082277BD00F08E9D6069A4D4856E9E79B937A9C19E6F154B7FA45BC316517A895BBBA9102C986D1D1B3958FFBA53ACA4E6F376A4821626287599407E556CECCF10490ED8CDEE4BACC549629246FB8C4F484304DCEE239D8974762D837CD017065A411C72A7E8152AB3EC6C559C34542F7D114A4186E5705FFBD829F83FE00504B0708366E832193000000B8000000504B03041400080808003C866A4900000000000000000000000014000000786C2F736861726564537472696E67732E786D6C7D92C14E03211086EF26BEC386BB65DB831AC3D283894FA00F40D96977121828336BECDB4BA3B1C9D27A9CEF2333C30F66FB1543F7098531D1A0D6AB5E75403E8D4887417DBCBF3D3CABADBDBF33CCD2F93493D4434FAA9B098F33BC5E406D433CA84924BF68CD7E82E87895325035FB54A2935A9683E65CC08D3C01480C7AD3F78F3A3A24650DA3356271345AACD1E7EA87F899254528B70DB908B7DCA1A4392FA51BC702CC0109D6FFB84DD314E5B4642C4E9AE939551C6A8EED5EE7CC4AD3056B2E185D39FD8E5FFA3D16966BF70CEE3ACF53A206C6B4C30034C71D94A5AB0F86A1CDF86F319F489C978BD7F54FD86F504B0708BAF98E31F100000041020000504B03041400080808003C866A490000000000000000000000000D000000786C2F7374796C65732E786D6CAD544D6FD43010BD23F11F2CDFA9B3A1A0AA4A5241D5453DB448EC22B87A6327B1F047647BAB0DBF9EB19D6C7657F4838A4B3C7E79EFCD78324E71B553123D70EB84D1255E9C6518715D1B26745BE2EFEBE5BB0B7C55BD7D53383F48BEEA38F70814DA95B8F3BEBF24C4D51D57D49D999E6B78D318ABA887AD6D89EB2DA7CC05919224CFB28F4451A17155E8AD5A2AEF506DB6DA9738C3A42A1AA36724C709A80AF71B3D5009A585DA80561B692C129AF11D6725BE0898A68A27D63595626345F4A34AC821C1790062A5234F096D6C0049CA929EB3CFFAF6EE6685EE6F7EA06F5FEF3EDD47F95448960AD9A4ADB75BFE585DA3795C1C241152EE4F788E1350153DF59E5BBD840D1AE3F5D0F3126BA379B289BC67D88CDA5F5F2C1D9E5200D45E1F179AC7DE9023D2CB123A2305C3FF66191768C5C65806433735E3039EA0AA90BCF120B7A2EDC2EA4D1F9A6DBC370A0226686B349521C1A498D740427154E1C374306A7FA381E329E785CA58D329EBF576E1A4A7A4FF94620CA0D335977215583F9B7DBB17D0EE5D83D22DBC65E102A230A35308DF680C934DDA04FF43B7E47D609BBFCA16ED9ABDFF63EAC5AC7E7FA83E9FD588F6BD1CC2B08D7732019F23F7085A9A50EC746FC9780888E67F5CF507504B0708E92B0617D001000018050000504B03041400080808003C866A490000000000000000000000000F000000786C2F776F726B626F6F6B2E786D6C8D8EC14EC3300C86EF48BC43E43B4B0A0841D5740710D26E1C0AF7AC71D7684D5CD961E3F1693B153872B27EF9F3E7BFDA7EC5419D902550B2506C0C284C2DF9900E16DE9BD79B47D8D6D757D599F8B8273AAA894F62A1CF792CB596B6C7E8644323A669D3114797A7C8072D23A3F3D223E638E85B631E747421C1C550F27F1CD475A1C5176A3F23A67C91300E2E4F6DA50FA340FDD3EC8D9577198B27736FA1738320E8BA9A371F01CFF20BCE51B9368713366E6FC1CC9CFE032E9DD7A9928B68E1990662D5A064505C066F8177FE0ED4C2ECA6582C96F554AFCFEA6F504B0708E4105EEADD00000062010000504B03041400080808003C866A490000000000000000000000001A000000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73AD91C14EC3300C40EFFD8AC8779A769310424D774148BBB2F10151EA36D5DA24B20DDBFE9E8004AC12080E3B59B6E3E797A4D99CE649BD22F1188381BAAC406170B11BC360E079FF7873079BB6289A279CACE433ECC7C42A0F0536E045D2BDD6EC3CCE96CB9830E44E1F69B692531A74B2EE6007D4ABAABAD574C980B6506A8155DBCE006DBB1AD4FE9CF03FF8D8F7A3C387E85E660CF2C316CDDE12763BA17C21CE604B038A8145B9CC54D0BFFAACAEEA23E7092F453EF23F0CD6D73438463AB047946F89AFD2FB7BE5507FFA347AF1EF6DF106504B0708F0CE5886D400000030020000504B03041400080808003C866A4900000000000000000000000018000000786C2F776F726B7368656574732F7368656574312E786D6CAD96CB729B301486F79DE93B68B42F485C4507C8B44DDD246DDAF4BEC646364C007924D9E4F12B301773D9C0746310FECEAFA3C3AF23FC9B973C0367CA45CA8A00620D41408B1D8BD3E210C0DFBF366F08BC095FBFF24BC69F4542A9042AA010014CA43CBED575B14B681E098D1D69A1FED9339E47520DF94117474EA3B80ECA33DD40C8D1F3282D60E8C7694E8B6A46C0E93E80EF30D443BF06FFA4B41457F7A09A77CBD87335B88F03A8F293D1F627CDE84E523596FC44AB687D12BEA95379E220A6FBE894C91FACBCA3E921916A99B65AA70ADAB14CD4BF204FABD54390472FF5B54C639904D0D06CDB72886B43B03B09C9F2BF97E7F5AC604B85DCA4B24FA253321A25A353C248B390632C15321B21B317329590615AE6E2A4AC46CBBAD62296EBD8CBF3B21B2DBBD7C29A8D4C6FC51A9D46CBF90F5A6EA3E5765AA6E639C85B5E2DD228914EC95A5B2CAF91F23A294F236B568751EB50D449B99A8D57E4843BB3F76E57DB8210C7C5CBFD8E5BC363E36A8D8818C8C4CB536B4D8F7BD713B511914B5688B5AEC7BDED1D0D63D35823D6DA1EDBC3FDB8A2FEADEBB173F52AB1EBADE836B8753D76AFDFE592CEA55F5A61DD386F2319853E6725E0552F54135537AA49031520201097A7E710F9FAB90A6D88F753020F890F53C21812B753C21C121FA78435243653C21E129FA6843324EEA6843B24EEA70419120F53C21B129F672A362AEA97196454D5C7196454D6AF33C8A8AEDF669051619F66905165BFCF207D697565AAF6A8BEB8EC181DE863C40F6921C09649E55375C46B956BF78C49CAAB91EA0289FA90E80619DDCB9A82805FCEF3FA5EB263135BF9B9FB5E09FF01504B07088849CD9261020000E3080000504B010214001400080808003C866A49EBC3DE5304010000F4010000110000000000000000000000000000000000646F6350726F70732F636F72652E786D6C504B010214001400080808003C866A4957285E23E3000000460200000B00000000000000000000000000430100005F72656C732F2E72656C73504B010214001400080808003C866A4925E008CE380100002804000013000000000000000000000000005F0200005B436F6E74656E745F54797065735D2E786D6C504B010214001400080808003C866A49366E832193000000B80000001000000000000000000000000000D8030000646F6350726F70732F6170702E786D6C504B010214001400080808003C866A49BAF98E31F1000000410200001400000000000000000000000000A9040000786C2F736861726564537472696E67732E786D6C504B010214001400080808003C866A49E92B0617D0010000180500000D00000000000000000000000000DC050000786C2F7374796C65732E786D6C504B010214001400080808003C866A49E4105EEADD000000620100000F00000000000000000000000000E7070000786C2F776F726B626F6F6B2E786D6C504B010214001400080808003C866A49F0CE5886D4000000300200001A0000000000000000000000000001090000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73504B010214001400080808003C866A498849CD9261020000E308000018000000000000000000000000001D0A0000786C2F776F726B7368656574732F7368656574312E786D6C504B050600000000090009003F020000C40C00000000,'customerdetails001mb.xls','','0000-00-00 00:00:00',NULL,NULL),
 (3,0x504B0304140008080800A88B6A490000000000000000000000000B0000005F72656C732F2E72656C73AD92C14A04310C86EF82EF5072DFE9EC0A22B2752F22EC4D647D80D86666CA4C9BD2461DDFDEE2455D7740C16392E6FB3F48B7BB394CEA8572F11C0DAC9B161445CBCEC7DEC0E3E16E7505AA08468713473210197637E767DB079A50EA4E197C2AAA4262313088A46BAD8B1D2860693851AC938E7340A965EE75423B624F7AD3B6973A7F65C03155ED9D81BC776B5007CC3D898179D2AF9CC727E6B1A9E03A784BF49B58EE3A6FE996ED73A02827D28F5E805EB2D97CDA38B6F799EB2EA6F4DF3A340B45476E956A0265F154969D2E4E3859CEF437A9E5D3E840820E053FA83F94F4B7BF503BEF504B0708E241A2ECE700000055020000504B0304140008080800A88B6A49000000000000000000000000130000005B436F6E74656E745F54797065735D2E786D6CB5534D4F023110BD9BF81F36BD9A6DC183318695831F4725117F406D67D9867EA51D10FEBDD3056344483084D374F2DEBCF73A6947E395B3D5125236C1376CC807AC02AF82367ED6B0F7E9737DCBAA8CD26B69838786F9C0C6F79717A3E93A42AE68D8E7867588F14E88AC3A7032F310C113D286E424529B66224A35973310D783C18D50C12378ACB168B0A2F608AD5C58AC1E3648116F988CD11A25919289A5D73BB2F5569227B03D277726E62B22B0EA69452A9B1B119A9938CA6377B4F4FDE42BED27190DFF8A17DAD628D0412D1C8D7028BA1A741D1311131AD8669DC8842FD291A020F284D02C489A9FE6FEBD1C15121C655988277AEEDC38C70452E70E009DE5B99309F41B267A587F63ACACF845386B125CDB3D9B28117AE4BC5BA0CA9D347E9FFF6748F38F10E6E74C503CFAF3A1003D98455F863F4944FFE1E9F405504B0708A46383984001000032040000504B0304140008080800A88B6A4900000000000000000000000010000000646F6350726F70732F6170702E786D6C4D8EC10AC2301044EF82FF10726FB77A109134A52082277BD00F08E9D6069A4D4856E9E79B937A9C19E6F154B7FA45BC316517A895BBBA9102C986D1D1B3958FFBA53ACA4E6F376A4821626287599407E556CECCF10490ED8CDEE4BACC549629246FB8C4F484304DCEE239D8974762D837CD017065A411C72A7E8152AB3EC6C559C34542F7D114A4186E5705FFBD829F83FE00504B0708366E832193000000B8000000504B0304140008080800A88B6A4900000000000000000000000011000000646F6350726F70732F636F72652E786D6C6D906F4BC3301087DF0B7E8792F7ED351B1B1ADA0E510682E2C00EC5772139DB62F38724DAF9ED4DBB59417D7977CF3DDCFD8ACD41F5C9073ADF195D129AE524412D8CEC7453927DBD4D2F48E203D792F7466349B4219BEAFCAC109609E370E78C45173AF4491469CF842D491B8265005EB4A8B8CF22A1E3F0D538C5432C5D03968B37DE202CF27C0D0A03973C701885A99D8DE4A4946256DA77D74F0229007B54A883079A51F861033AE5FF5D98263379F0DD4C0DC3900DCB898B175178BEBF7B9C8E4F3B3D3E2F908C3F9FE44C38E4016512152C7CDA98CAF7E469797D536F49B5C8E93AA534A5794D295B5D32BA7A29E0D7FE5179AC8CABAE62282D26BB87DB919CDB11823F61C7EE17504B070847139F740B010000BA010000504B0304140008080800A88B6A4900000000000000000000000014000000786C2F736861726564537472696E67732E786D6C7D924D4EC4300C85F748DCA1CA9E49618100B5990512278003A46D682D1A3BC44E35DC9E54B318896458FA7DFE794EDC1D4F7E6D361719087B757F6855E370A40970EED5C7FBDBDD933A9ADB9B8E599A91124A4E7A564D42F84EEEF522E436C8BD5A44C28BD63C2ECE5B3E507098C927456F258771D61CA2B3132FCE895FF543DB3E6A6F0195E9184C2706A64E8BE9F41E9D95402CD9CE64C5FD459C4258C1C56BBAFC84A266A394DDFD8730F9A1EC392557B330C0BA22D5D45A36E04630E6467E7FBA62530B57082561B1B87F4B3DC1CEC5AC14846481BC698D309CEA00015D49CEAA1D682BE68C29C67C334549CC2710BFF822EB7C44E617504B0708C69E8351F900000072020000504B0304140008080800A88B6A490000000000000000000000000D000000786C2F7374796C65732E786D6CAD54CB6EDB3010BC17E83F10BC3794D5B4080A49411AC4450E4981DA4572A5454A22CA8740D281D5AFEF92942CC7685037C845DC1DCD0C97ABA58ACB9D92E8895B278C2EF1E22CC388EBDA30A1DB12FF5C2F3F5CE0CBEAFDBBC2F941F255C7B947A0D0AEC49DF7FD17425CDD7145DD99E9B986378DB18A7A486D4B5C6F39652E88942479967D268A0A8DAB426FD55279876AB3D5BEC4192655D1183D23394E4055B8DFE8894A282DD406B4DA486391D08CEF382BF145C034553CB1AEA9141B2BA21F55420E09CE03102B1D794A68630348D22EE939FBAC6FEF6E56E8FEE601FDF87E77751FE55321592A6493526FB7FCA5BA46F3B838D84448B93FE1394E4055F4D47B6EF5121234C6EBA1E725D646F3641379FF60336A7F7DB374385D11FD81D55E3FAF3D8FED2207BA531D9D9182FDA7655CA03B1B6319CCE1D49F4F7882AA42F2C683DC8AB60BAB377DE8BFF1DE280898A0ADD154860D26C5BC06128AD30BDFAA83E9FB1B0D1C8F39272A634DC7ACD7DB85931E93DE688B31804ED75CCA55603D36FB762FA0DDBB06A58B79CBC29D44616CA710BED118269B9404FF43B7E47D609BBFCA16ED9ABDFF4BEAC5ACFE78A83E9FD588F6BD1CC2B08DD734015F23F719B434A1D8E92A93F11010CDBFBDEA0F504B07084C451B5DD10100002B050000504B0304140008080800A88B6A490000000000000000000000000F000000786C2F776F726B626F6F6B2E786D6C8D8EC14EC3300C86EF48BC43E43B4B0A0841D5740710D26E1C0AF7AC71D7684D5CD961E3F1693B153872B27EF9F3E7BFDA7EC5419D902550B2506C0C284C2DF9900E16DE9BD79B47D8D6D757D599F8B8273AAA894F62A1CF792CB596B6C7E8644323A669D3114797A7C8072D23A3F3D223E638E85B631E747421C1C550F27F1CD475A1C5176A3F23A67C91300E2E4F6DA50FA340FDD3EC8D9577198B27736FA1738320E8BA9A371F01CFF20BCE51B9368713366E6FC1CC9CFE032E9DD7A9928B68E1990662D5A064505C066F8177FE0ED4C2ECA6582C96F554AFCFEA6F504B0708E4105EEADD00000062010000504B0304140008080800A88B6A490000000000000000000000001A000000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73AD91CF4A03410C87EF82EF30E4EECE6E0511E9D88B08BD6A7D806126BBB37437334CE29FBEBD51415BB1E0A1A790847CBF0FB25CBDCD9379C1CA6326075DD382410A398E343878DADC5F5C8361F114FD94091D5086D5EDF9D9F201272F7AC3692C6C1442EC2089941B6B39249C3D37B920E9A6CF75F6A26D1D6CF161EB07B48BB6BDB2759F01BFA9661D1DD475ECC06C7C1D501C70F215E3A354B5E346D1BADA15FC4F70EEFB31E05D0ECF3392FC916F0FE0608FE92CF6746437E1E93D3EA9C7052E7F045E73DD7242940F7B2DDDA95DBE03BE74ECC1D775F20E504B0708A896A78DDA0000003F020000504B0304140008080800A88B6A4900000000000000000000000018000000786C2F776F726B7368656574732F7368656574312E786D6CAD964B739B301485F79DE97FD0685FE0F2A60364DAA66E92366D9AF4B1C646364C0CF248B29D9F5F8179C3A2D06E6C84BF7BB83A3AC8F2AF5EB23D3A11C6539A0718140D23926F689CE6BB00FFFCB17AE3E2ABF0F52BFF4CD9334F08114816E43CC0891087B7AACA3709C922AED003C9E52F5BCAB248C821DBA9FCC048149745D95ED535CD56B328CD71E8C76946F2E28988916D80DF015643BF047FA5E4CC3BD7A878EE9AD2E762701B0758F627A2F513D9938D20722CD89114D5EAA87C55B6F2C0504CB6D1712F1EE9F986A4BB44C8695A729EB26843F7BCFC44595ACC1EA32C7A29BFCF692C9200EB8AE5198E85D1E6C805CD7E5FEE96CF446BC2C52A156D0B8D8E5EE9E88D0E688A0BB6A9D9FA5C2DA3D2321A2D47F174CF76677765564A66DB152C9A9E5509595D21D3D5CC054DD99596DD6A998B9A722A21A7E393A31930DB70B712721B216BE9DA799594D7E9C970405B303DD0EA6C6AFFEA14343187EE02EA3638307F01A10E3B74D2EEC8C61CDB9AEF18D4718736EF86B47FBE509D7668E3EE2D0B04D4798736F0EED248401D78B0BB9B0358BA612E58CA3AF5E0FC8FA5ACA30F6E67A296EBB94B5AABC30F5E470C4CD3FAFB25502FFB73B99B5F47220A7D46CF88151BB47C527121FF39902CE018F1CBDD53A8F9EAA928AD88F76302FAC48731A1F789EB3161F4898F63C2EC13AB3161F5894F63C2EE133763C2E913B763C2ED137763C2EB139F271C1B98FA650219B87A3F810C6CFD3A810C7CFD36810C8C7D984006CE7E9F4006D63E4E20036F9F2690D65C5546B33E855CB27A8876E43E62BB34E7684D854CBB3CBD28C58BB4A55410568CE42E97C8335233D893AD28298CD8E5A8525E0B7AA86A8BB7A2398A857F00504B07085CAEDDF476020000BE090000504B01021400140008080800A88B6A49E241A2ECE7000000550200000B00000000000000000000000000000000005F72656C732F2E72656C73504B01021400140008080800A88B6A49A463839840010000320400001300000000000000000000000000200100005B436F6E74656E745F54797065735D2E786D6C504B01021400140008080800A88B6A49366E832193000000B80000001000000000000000000000000000A1020000646F6350726F70732F6170702E786D6C504B01021400140008080800A88B6A4947139F740B010000BA010000110000000000000000000000000072030000646F6350726F70732F636F72652E786D6C504B01021400140008080800A88B6A49C69E8351F9000000720200001400000000000000000000000000BC040000786C2F736861726564537472696E67732E786D6C504B01021400140008080800A88B6A494C451B5DD10100002B0500000D00000000000000000000000000F7050000786C2F7374796C65732E786D6C504B01021400140008080800A88B6A49E4105EEADD000000620100000F0000000000000000000000000003080000786C2F776F726B626F6F6B2E786D6C504B01021400140008080800A88B6A49A896A78DDA0000003F0200001A000000000000000000000000001D090000786C2F5F72656C732F776F726B626F6F6B2E786D6C2E72656C73504B01021400140008080800A88B6A495CAEDDF476020000BE09000018000000000000000000000000003F0A0000786C2F776F726B7368656574732F7368656574312E786D6C504B050600000000090009003F020000FB0C00000000,'accountspayable001mb.xls','','0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `uploadtemplate001mb` ENABLE KEYS */;


--
-- Definition of table `user001hb`
--

DROP TABLE IF EXISTS `user001hb`;
CREATE TABLE `user001hb` (
  `person_id` int(11) NOT NULL AUTO_INCREMENT,
  `domain` varchar(40) DEFAULT NULL,
  `username` varchar(40) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `language` int(11) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `securityquestion` varchar(250) DEFAULT NULL,
  `securityanswer` varchar(250) DEFAULT NULL,
  `theme` varchar(10) DEFAULT '#286090',
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`person_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user001hb`
--

/*!40000 ALTER TABLE `user001hb` DISABLE KEYS */;
INSERT INTO `user001hb` (`person_id`,`domain`,`username`,`password`,`status`,`language`,`email`,`filename`,`securityquestion`,`securityanswer`,`theme`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`,`firstname`,`lastname`) VALUES 
 (6,'Manufacturing','aryan','$2b$10$6uM.6E/VvGb.ZB..Bxpnd.75kl65.5QDKHWLgvq73Uz1oBUYj2HJu','A',4,'kalai@gmail.com',NULL,'What was your childhood nickname ?','achu','#286090','aditi','2023-01-31 12:30:27',NULL,NULL,'aryan','karthik'),
 (7,'Manufacturing','thiru','$2b$10$N0wzzJWmPbAAZP4zYsgzGeNUzy5paZrbTgAOrIM8TkYbCsJwnuo7e','A',4,'kalai@gnmail.com',NULL,'What was your childhood nickname ?','achus','#286090','aditi','2023-01-31 12:35:57',NULL,NULL,'thiru','kalai'),
 (8,'Manufacturing','dhanu','$2b$10$ReXw1N4yyKcjURE6J704Ju7rI9mmlDSU4W9hMvNEiHVt/FIOFLPcG','A',5,'kali@gmail.com',NULL,'What was your childhood nickname ?','kutty','#286090','aditi','2023-01-31 12:43:33',NULL,NULL,'dhanu','ramya'),
 (9,'Manufacturing','fg','$2b$10$AoHl1l42ogFbOd98RX8/E.ns1Hor0zvjAdRhIy4444rIQ4r7.zyJ.','A',5,'fgfg@gmail.com',NULL,'What was your childhood nickname ?','fg','#286090','aditi','2023-01-31 12:49:36',NULL,NULL,'fg','gf'),
 (10,'Manufacturing','thiru','$2b$10$DY/RBBatCAssjqZPysXJXe9dyN0GG0BhPO.Vd5cSChZUnpjXeHkmW','R',5,'abc@gmai.com',NULL,'What was your childhood nickname ?','iyer','#286090','siva','2023-02-02 12:18:10','siva','2023-02-02 13:03:23','thiru','arasu'),
 (14,'Manufacturing','ASD','$2b$10$YKiZ3FU1mxn0B8.5mNMhTuPXLP4zwm3rlSxxw4GiekEB8jYxhtGle','A',12,'ASD',NULL,'What was your childhood nickname ?','asd','#286090','priya','2023-02-02 18:04:13',NULL,NULL,'ASD','as'),
 (15,'Manufacturing','ASDF','$2b$10$FZxKTnc9g5T4F7MnxfBNW./YwphQijrJkW6/drLuVTEcyFjSPIV6C','A',5,'ASD',NULL,'What was your childhood nickname ?','ASD','#286090','priya','2023-02-02 18:06:39',NULL,NULL,'ASDC','ASD'),
 (16,'Manufacturing','sadf','$2b$10$LRhCRIGRB.JjnGOaNz7/xOVxP.q7UdTr6.FcRH9EUblZt8AYPzaSi','A',5,'asdf',NULL,'What was your childhood nickname ?','sdf','#286090','priya','2023-02-02 18:08:15',NULL,NULL,'ad','asdf'),
 (17,'Manufacturing','we','$2b$10$RaroEqzorUO2IZ7/gxxmru1Pk9.K5Za3KKtQH.WcX3QLyzqtFXdTC','A',11,'abc@gmail.com',NULL,'What was your childhood nickname ?','we','#286090','priya','2023-02-02 18:36:54',NULL,NULL,'we','we'),
 (19,'Manufacturing','dhanu','$2b$10$JF1i2NZ7Phfxj2isHpsGWuMbICUfRuPW0J/zcn41ofdUMjI/YXkWK','A',13,'asc@gmail.com',NULL,'What was your childhood nickname ?','kuttyma','#286090','priya','2023-02-02 18:50:49','dhanu','2023-02-02 18:54:51','dhanu','kutty');
/*!40000 ALTER TABLE `user001hb` ENABLE KEYS */;


--
-- Definition of table `user001mb`
--

DROP TABLE IF EXISTS `user001mb`;
CREATE TABLE `user001mb` (
  `person_id` int(11) NOT NULL AUTO_INCREMENT,
  `domain` varchar(40) DEFAULT NULL,
  `username` varchar(40) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `language` int(11) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `securityquestion` varchar(250) DEFAULT NULL,
  `securityanswer` varchar(250) DEFAULT NULL,
  `theme` varchar(10) DEFAULT '#286090',
  `insert_user` varchar(40) DEFAULT NULL,
  `insert_datetime` datetime DEFAULT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`person_id`),
  KEY `language` (`language`),
  CONSTRAINT `language` FOREIGN KEY (`language`) REFERENCES `applanguagesetting001mb` (`Id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user001mb`
--

/*!40000 ALTER TABLE `user001mb` DISABLE KEYS */;
INSERT INTO `user001mb` (`person_id`,`domain`,`username`,`password`,`status`,`language`,`email`,`filename`,`securityquestion`,`securityanswer`,`theme`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`,`firstname`,`lastname`) VALUES 
 (1,'Manufacturing','siva','$2b$10$htw1oGtxUocECyzx6zNAFeI7/LvUuJlkDFIJu/i34/QG4wrZDGqaS','A',5,'adc@gmail.com',NULL,'What was your childhood nickname ?','ss','#34cda2','siva','2021-09-06 13:18:33','kalaii','2023-02-01 18:27:48','sivakumar','karunamoorthy'),
 (2,'Manufacturing','kalaii','$2b$10$TUg5bI.xD2Jcwc/KHlUjbeuWuKCz34yqH68NIyjh3OfOJ/IHl6mRC','A',8,'kalaimathi.kannadhasan@gmail.com',NULL,'What was your childhood nickname ?','papa',NULL,'siva','2023-01-11 15:36:46','aditi','2023-02-01 18:21:38','kalai22','mathii'),
 (3,'Manufacturing','priya','$2b$10$XcYk5bPaLxq9SsROFt1UceJbAKViSUMRBePG/cAmlDx0XqD.qZRRq','A',9,'priyap@gmail.com',NULL,'What was your childhood nickname ?','papu',NULL,'siva','2023-01-11 15:39:19','priya','2023-02-03 17:48:11','priyaa','kutty'),
 (20,'Manufacturing','aryan','$2b$10$g5uLF0R7782pTlRYjuFPIuyBrV0IYu10kgcJ0GYLcwLuLtisuck1y','A',14,'abc@gmail.com',NULL,'What was your childhood nickname ?','achu','#286090','priya','2023-02-03 17:50:42',NULL,NULL,'aryan','karthik');
/*!40000 ALTER TABLE `user001mb` ENABLE KEYS */;


--
-- Definition of table `userrole001hb`
--

DROP TABLE IF EXISTS `userrole001hb`;
CREATE TABLE `userrole001hb` (
  `userroleid` int(11) NOT NULL AUTO_INCREMENT,
  `loginid` int(11) NOT NULL,
  `role` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`userroleid`),
  KEY `fk_login_idx` (`loginid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userrole001hb`
--

/*!40000 ALTER TABLE `userrole001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `userrole001hb` ENABLE KEYS */;


--
-- Definition of table `userrole001mb`
--

DROP TABLE IF EXISTS `userrole001mb`;
CREATE TABLE `userrole001mb` (
  `userroleid` int(11) NOT NULL AUTO_INCREMENT,
  `loginid` int(11) NOT NULL,
  `role` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`userroleid`),
  KEY `fk_login_idx` (`loginid`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userrole001mb`
--

/*!40000 ALTER TABLE `userrole001mb` DISABLE KEYS */;
INSERT INTO `userrole001mb` (`userroleid`,`loginid`,`role`,`username`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (39,46,'ROLE_ADMIN','sss','','0000-00-00 00:00:00',NULL,NULL),
 (40,47,'','tamil K','','0000-00-00 00:00:00',NULL,NULL),
 (41,48,'','etdtdd','','0000-00-00 00:00:00',NULL,NULL),
 (42,49,'','tamil','','0000-00-00 00:00:00',NULL,NULL),
 (43,50,'ROLE_USER','raj','','0000-00-00 00:00:00',NULL,NULL),
 (44,51,'','selvamRaja','','0000-00-00 00:00:00',NULL,NULL),
 (45,62,'','aaa','insertuser','2021-09-03 11:19:04',NULL,'2021-09-03 11:19:05'),
 (46,63,'ROLE_USER','latha','insertuser','2021-09-03 11:20:13','updateuser','2021-09-03 11:20:39'),
 (47,64,'','fff','insertuser','2021-09-03 11:46:35',NULL,'2021-09-03 11:46:35'),
 (48,65,'','rizwana','insertuser','2021-09-06 13:18:33',NULL,'2021-09-06 13:18:33'),
 (49,66,'','rizwana','insertuser','2021-09-06 13:19:15',NULL,'2021-09-06 13:19:16'),
 (50,67,'','rizwana','insertuser','2021-09-06 13:19:27',NULL,'2021-09-06 13:19:28'),
 (51,68,'','rizwana','insertuser','2021-09-06 13:19:28',NULL,'2021-09-06 13:19:28'),
 (52,69,'','rizwana','insertuser','2021-09-06 13:19:28',NULL,'2021-09-06 13:19:28'),
 (53,70,'','rizwana','insertuser','2021-09-06 13:19:54',NULL,'2021-09-06 13:19:54'),
 (54,71,'','rizwana','insertuser','2021-09-06 13:19:54',NULL,'2021-09-06 13:19:54'),
 (55,72,'','rizwana','insertuser','2021-09-06 13:19:54',NULL,'2021-09-06 13:20:32'),
 (56,73,'','rizwana','insertuser','2021-09-06 13:21:41',NULL,'2021-09-06 13:21:42'),
 (57,74,'','rizwana','insertuser','2021-09-06 13:21:42',NULL,'2021-09-06 13:21:42'),
 (58,75,'','rizwana','insertuser','2021-09-06 13:21:53',NULL,'2021-09-06 13:21:53'),
 (59,76,'','rizwana','insertuser','2021-09-06 13:21:53',NULL,'2021-09-06 13:21:53'),
 (60,77,'','rizwana','insertuser','2021-09-06 13:25:01',NULL,'2021-09-06 13:25:01'),
 (61,78,'','rizwana','insertuser','2021-09-06 13:25:17',NULL,'2021-09-06 13:25:17'),
 (62,79,'ROLE_GUEST','Shameem','siva','2021-12-01 12:26:20',NULL,'2021-12-01 12:26:20'),
 (63,80,'ROLE_GUEST','dharunsri689@gmail.com','sekar','2021-12-14 04:37:57',NULL,'2021-12-14 04:37:57'),
 (64,81,'ROLE_GUEST','rizwana','siva','2022-01-21 09:44:45',NULL,'2022-01-21 09:44:45'),
 (65,82,'ROLE_GUEST','rizwana','siva','2022-01-21 09:45:17',NULL,'2022-01-21 09:45:18'),
 (66,83,'ROLE_GUEST','rizwana','siva','2022-01-21 09:45:20',NULL,'2022-01-21 09:45:20'),
 (67,84,'ROLE_GUEST','rizwana','siva','2022-01-21 09:45:21',NULL,'2022-01-21 09:45:21'),
 (68,85,'ROLE_GUEST','rizwana','siva','2022-01-21 09:45:21',NULL,'2022-01-21 09:45:21'),
 (69,86,'ROLE_GUEST','rizwana','siva','2022-01-21 09:45:21',NULL,'2022-01-21 09:45:21'),
 (70,87,'ROLE_GUEST','rizwana','siva','2022-01-21 09:45:35',NULL,'2022-01-21 09:45:36'),
 (71,88,'ROLE_GUEST','rizwana','siva','2022-01-21 09:46:52',NULL,'2022-01-21 09:46:52'),
 (72,89,'ROLE_GUEST','rizwana','siva','2022-01-21 09:47:26',NULL,'2022-01-21 09:47:26'),
 (73,90,'ROLE_GUEST','rizwana','siva','2022-01-21 09:47:27',NULL,'2022-01-21 09:47:27'),
 (74,91,'ROLE_GUEST','rizwana','siva','2022-01-21 09:47:28',NULL,'2022-01-21 09:47:28'),
 (75,92,'ROLE_GUEST','rizwana','siva','2022-01-21 09:47:29',NULL,'2022-01-21 09:47:29'),
 (76,93,'ROLE_GUEST','rizwana','siva','2022-01-21 09:47:29',NULL,'2022-01-21 09:47:29'),
 (77,94,'ROLE_GUEST','rizwana','siva','2022-01-21 09:47:29',NULL,'2022-01-21 09:47:29'),
 (78,95,'ROLE_GUEST','rizwana','siva','2022-01-21 09:47:29',NULL,'2022-01-21 09:47:30'),
 (79,96,'ROLE_ADMIN','rizwana','siva','2022-01-21 09:47:30','siva','2022-01-21 09:50:37'),
 (80,97,'ROLE_GUEST','VasuERP','Shameem','2022-02-01 08:51:24',NULL,'2022-02-01 08:58:48'),
 (81,98,'ROLE_GUEST','VasuERP','Shameem','2022-02-01 08:51:31',NULL,'2022-02-01 08:58:54'),
 (82,99,'ROLE_GUEST','VasuERP','Shameem','2022-02-01 08:51:37',NULL,'2022-02-01 08:59:01'),
 (83,100,'ROLE_GUEST','VasuERP','Shameem','2022-02-01 08:51:38',NULL,'2022-02-01 08:59:02'),
 (84,101,'ROLE_GUEST','VasuERP','Shameem','2022-02-01 08:51:39',NULL,'2022-02-01 08:59:02'),
 (85,102,'ROLE_GUEST','vasuERP','latha','2022-02-01 09:26:50',NULL,'2022-02-01 09:26:51'),
 (86,103,'ROLE_GUEST','vasuERP','latha','2022-02-01 09:27:33',NULL,'2022-02-01 09:27:34');
/*!40000 ALTER TABLE `userrole001mb` ENABLE KEYS */;


--
-- Definition of table `warehouse001hb`
--

DROP TABLE IF EXISTS `warehouse001hb`;
CREATE TABLE `warehouse001hb` (
  `whId` int(11) NOT NULL AUTO_INCREMENT,
  `warehouseName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `isActive` varchar(20) NOT NULL,
  `warehouseCode` varchar(60) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`whId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `warehouse001hb`
--

/*!40000 ALTER TABLE `warehouse001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `warehouse001hb` ENABLE KEYS */;


--
-- Definition of table `warehouse001mb`
--

DROP TABLE IF EXISTS `warehouse001mb`;
CREATE TABLE `warehouse001mb` (
  `whId` int(11) NOT NULL AUTO_INCREMENT,
  `warehouseName` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `isActive` varchar(20) NOT NULL,
  `warehouseCode` varchar(60) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`whId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `warehouse001mb`
--

/*!40000 ALTER TABLE `warehouse001mb` DISABLE KEYS */;
INSERT INTO `warehouse001mb` (`whId`,`warehouseName`,`status`,`isActive`,`warehouseCode`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (5,'SAD','Enabled','Yes','45+64','sheik','2022-02-11 11:43:24','sheik','2022-02-11 11:43:35'),
 (6,'fra','Variant','Yes','57','siva','2022-10-20 17:56:22',NULL,NULL);
/*!40000 ALTER TABLE `warehouse001mb` ENABLE KEYS */;


--
-- Definition of table `workstation001hb`
--

DROP TABLE IF EXISTS `workstation001hb`;
CREATE TABLE `workstation001hb` (
  `workstId` int(11) NOT NULL AUTO_INCREMENT,
  `workstName` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`workstId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workstation001hb`
--

/*!40000 ALTER TABLE `workstation001hb` DISABLE KEYS */;
/*!40000 ALTER TABLE `workstation001hb` ENABLE KEYS */;


--
-- Definition of table `workstation001mb`
--

DROP TABLE IF EXISTS `workstation001mb`;
CREATE TABLE `workstation001mb` (
  `workstId` int(11) NOT NULL AUTO_INCREMENT,
  `workstName` varchar(40) NOT NULL,
  `insert_user` varchar(40) NOT NULL,
  `insert_datetime` datetime NOT NULL,
  `updated_user` varchar(40) DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`workstId`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workstation001mb`
--

/*!40000 ALTER TABLE `workstation001mb` DISABLE KEYS */;
INSERT INTO `workstation001mb` (`workstId`,`workstName`,`insert_user`,`insert_datetime`,`updated_user`,`updated_datetime`) VALUES 
 (18,'','','0000-00-00 00:00:00',NULL,NULL),
 (19,'null','','0000-00-00 00:00:00',NULL,NULL),
 (20,'null','','0000-00-00 00:00:00',NULL,NULL),
 (21,'scc','insertuser','2021-09-01 15:13:18','updateuser','2021-09-01 15:13:32');
/*!40000 ALTER TABLE `workstation001mb` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
